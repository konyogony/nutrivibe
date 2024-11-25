/** https://npm.im/react-simple-typewriter
 * The MIT License (MIT)
 *
 * Copyright (c) 2021-present awran5
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { useCallback, useEffect, useReducer, useRef } from 'react';

export type State = {
    speed: number;
    text: string;
    count: number;
};

export type Action =
    | { type: 'DELAY'; payload: number }
    | { type: 'TYPE'; payload: string; speed: number }
    | { type: 'DELETE'; payload: string; speed: number }
    | { type: 'COUNT' };

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'TYPE':
            return {
                ...state,
                speed: action.speed,
                text: action.payload?.substring(0, state.text.length + 1),
            };
        case 'DELAY':
            return {
                ...state,
                speed: action.payload,
            };
        case 'DELETE':
            return {
                ...state,
                speed: action.speed,
                text: action.payload?.substring(0, state.text.length - 1),
            };
        case 'COUNT':
            return {
                ...state,
                count: state.count + 1,
            };
        default:
            return state;
    }
}

export type TypewriterProps = {
    /** Callback Function that is triggered when loops are completed. available if loop is > `0` */
    onLoopDone?: () => void;
    /** Callback Function that is triggered while typing with `typed` words count passed */
    onType?: (count: number) => void;
    /** Callback Function that is triggered while deleting */
    onDelete?: () => void;
    /** Callback Function that is triggered on typing delay */
    onDelay?: () => void;
    /** Array of strings holding the words */
    words: string[];
    /** Character typing speed in Milliseconds */
    typeSpeed?: number;
    /** Character deleting speed in Milliseconds */
    deleteSpeed?: number;
    /** Delay time between the words in Milliseconds */
    delaySpeed?: number;
};

export type TypewriterHelper = {
    /** `true` if currently typing */
    isType: boolean;
    /** `true` if on delay */
    isDelay: boolean;
    /** `true` if currently deleting */
    isDelete: boolean;
    /** `true` if all loops are done */
    isDone: boolean;
};

export const useTypewriter = ({
    words = ['Hello World!', 'This is', 'a simple Typewriter'],
    typeSpeed = 80,
    deleteSpeed = 50,
    delaySpeed = 1500,
    onLoopDone,
    onType,
    onDelete,
    onDelay,
}: TypewriterProps): [string, TypewriterHelper] => {
    const [{ speed, text, count }, dispatch] = useReducer(reducer, {
        speed: typeSpeed,
        text: '',
        count: 0,
    });

    // Refs
    const loops = useRef(0);
    const isDone = useRef(false);
    const isDelete = useRef(false);
    const isType = useRef(false);
    const isDelay = useRef(false);

    const handleTyping = useCallback(() => {
        const index = count % words.length;
        const fullWord = words[index];

        if (!isDelete.current) {
            dispatch({ type: 'TYPE', payload: fullWord, speed: typeSpeed });
            isType.current = true;

            if (text === fullWord) {
                dispatch({ type: 'DELAY', payload: delaySpeed });
                isType.current = false;
                isDelay.current = true;

                setTimeout(() => {
                    isDelay.current = false;
                    isDelete.current = true;
                }, delaySpeed);
            }
        } else {
            dispatch({ type: 'DELETE', payload: fullWord, speed: deleteSpeed });
            if (text === '') {
                isDelete.current = false;
                dispatch({ type: 'COUNT' });
            }
        }

        if (isType.current) {
            if (onType) onType(loops.current);
        }

        if (isDelete.current) {
            if (onDelete) onDelete();
        }

        if (isDelay.current) {
            if (onDelay) onDelay();
        }
    }, [count, delaySpeed, deleteSpeed, typeSpeed, words, text, onType, onDelete, onDelay]);

    useEffect(() => {
        const typing = setTimeout(handleTyping, speed);

        if (isDone.current) clearTimeout(typing);

        return () => clearTimeout(typing);
    }, [handleTyping, speed]);

    useEffect(() => {
        if (!onLoopDone) return;

        if (isDone.current) {
            onLoopDone();
        }
    }, [onLoopDone]);

    return [
        text,
        {
            isType: isType.current,
            isDelay: isDelay.current,
            isDelete: isDelete.current,
            isDone: isDone.current,
        },
    ];
};
