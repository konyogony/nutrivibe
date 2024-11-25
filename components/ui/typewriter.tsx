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

import { Cursor, CursorProps } from '@/components/ui/cursor';
import { TypewriterProps, useTypewriter } from '@/lib/use-typewriter';

type ComponentProps = {
    /** Show / Hide the cursor */
    cursor?: boolean;
} & TypewriterProps &
    CursorProps;

/**
 * A Simple React Component for adding a nice Typewriter effect to your project.
 */
export const Typewriter = ({
    words = ['Hello World!', 'This is', 'a simple Typewriter'],
    typeSpeed = 80,
    deleteSpeed = 50,
    delaySpeed = 1500,
    cursor = false,
    cursorStyle = '|',
    onLoopDone,
    onType,
    onDelay,
    onDelete,
}: ComponentProps): JSX.Element => {
    const [text] = useTypewriter({
        words,
        typeSpeed,
        deleteSpeed,
        delaySpeed,
        onLoopDone,
        onType,
        onDelay,
        onDelete,
    });

    return (
        <>
            <a>{text}</a>
            {cursor && <Cursor cursorStyle={cursorStyle} />}
        </>
    );
};
