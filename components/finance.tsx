import {
    cricketsPrice,
    headings,
    oatmealPrice,
    otherIngredientsPrice,
    profitMargin,
    profitPerBar,
    sellingPrice,
    sweetenersPrice,
} from '@/config';
import NumberFlow from '@number-flow/react';
import { PiCurrencyDollarThin } from '@vertisanpro/react-icons/pi';
import { motion } from 'motion/react';
import { Chart } from './chart';

interface FinanceProps {
    sectionRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

export const Finance = ({ sectionRefs }: FinanceProps) => {
    return (
        <div className='flex w-full flex-row py-[10vh] md:py-[15vh]'>
            <div className='flex w-full flex-col items-center px-8 xl:w-2/3'>
                <motion.span
                    className='relative mb-16 text-7xl font-semibold md:mb-64'
                    ref={(el) => {
                        sectionRefs.current[5] = el;
                    }}
                    id={headings[5].name.toLowerCase()}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.5 }}
                >
                    Finances
                </motion.span>
                <motion.span
                    className='mb-16 text-left text-3xl font-medium text-primary/90 md:w-[80%] md:text-center md:text-2xl'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.75 }}
                >
                    We are a sustainable company that values transparency. Here are some of our financial statistics.
                </motion.span>
                <motion.div
                    className='flex flex-col gap-16 md:w-[80%] md:items-center'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1 }}
                >
                    <a className='text-4xl font-semibold' href='/sources#section-2'>
                        Cost of ingredients
                    </a>
                    <div className='grid gap-8 md:grid-cols-2'>
                        <motion.div
                            className='flex flex-col items-start gap-2 rounded-xl border border-black/10 bg-neutral-200/40 px-6 py-3 text-left shadow-sm'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.25 }}
                        >
                            <span className='flex w-full flex-row text-2xl font-medium'>
                                Crickets - protein
                                <NumberFlow
                                    value={cricketsPrice}
                                    format={{ style: 'currency', currency: 'USD' }}
                                    className='ml-auto'
                                />
                            </span>
                            <span className='text-lg text-primary/80'>
                                Crickets are a complete protein source packed with essential amino acids, vitamins, and
                                minerals. They are sourced from suppliers like The Critter Depot, with a cost of $
                                {cricketsPrice}
                                per protein bar.
                            </span>
                        </motion.div>
                        <motion.div
                            className='flex flex-col items-end gap-2 rounded-xl border border-black/10 bg-neutral-200/40 px-6 py-3 text-right shadow-sm'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.5 }}
                        >
                            <span className='flex w-full flex-row text-2xl font-medium'>
                                <NumberFlow
                                    value={oatmealPrice}
                                    format={{ style: 'currency', currency: 'USD' }}
                                    className='mr-auto'
                                />
                                Oatmeal
                            </span>
                            <span className='text-lg text-primary/80'>
                                Oatmeal provides fiber and slow-digesting carbs for sustained energy. It&apos;s sourced
                                from grocery stores or bulk suppliers, with a cost of ${oatmealPrice} per bar for a 30g
                                portion.
                            </span>
                        </motion.div>
                        <motion.div
                            className='flex flex-col items-start gap-2 rounded-xl border border-black/10 bg-neutral-200/40 px-6 py-3 text-left shadow-sm'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.75 }}
                        >
                            <span className='flex w-full flex-row text-2xl font-medium'>
                                Maltitol & Sucralose - Sweeteners
                                <NumberFlow
                                    value={sweetenersPrice}
                                    format={{ style: 'currency', currency: 'USD' }}
                                    className='ml-auto'
                                />
                            </span>
                            <span className='text-lg text-primary/80'>
                                Maltitol and sucralose are low-calorie sweeteners that provide sweetness with minimal
                                digestive issues. They are sourced in bulk from ingredient suppliers, costing
                                approximately ${sweetenersPrice} per protein bar.
                            </span>
                        </motion.div>
                        <motion.div
                            className='flex flex-col items-end gap-2 rounded-xl border border-black/10 bg-neutral-200/40 px-6 py-3 text-right shadow-sm'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2 }}
                        >
                            <span className='flex w-full flex-row text-2xl font-medium'>
                                <NumberFlow
                                    value={otherIngredientsPrice}
                                    format={{ style: 'currency', currency: 'USD' }}
                                    className='mr-auto'
                                />
                                Peanut Butter, Honey, or Milk
                            </span>
                            <span className='text-lg text-primary/80'>
                                These ingredients enhance flavor, add healthy fats, and provide extra protein. They are
                                commonly available from supermarkets or bulk suppliers, costing around $
                                {otherIngredientsPrice} per protein bar.
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    className='flex w-full flex-col items-center justify-center py-[5vh]'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1 }}
                >
                    <span className='w-1/2 text-center text-2xl font-medium'>Pie chart representation:</span>
                    <Chart />
                </motion.div>
                <motion.div
                    className='flex w-full flex-col gap-4 md:w-[60%] xl:w-1/2'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 1.2 }}
                >
                    <motion.div
                        className='flex w-full flex-row justify-between rounded-lg border border-black/10 bg-neutral-200/20 px-4 py-2 shadow-sm'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 2.75 }}
                    >
                        <span className='text-2xl font-medium'>Selling Price per Bar</span>
                        <span className='text-2xl text-brand'>${sellingPrice.toFixed(2)}</span>
                    </motion.div>
                    <motion.div
                        className='flex w-full flex-row justify-between rounded-lg border border-black/10 bg-neutral-200/20 px-4 py-2 shadow-sm'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 3 }}
                    >
                        <span className='text-2xl font-medium'>Production Cost per Bar</span>
                        <span className='text-2xl text-brand'>${(sellingPrice - profitPerBar).toFixed(2)}</span>
                    </motion.div>
                    <motion.div
                        className='flex w-full flex-row justify-between rounded-lg border border-black/10 bg-neutral-200/20 px-4 py-2 shadow-sm'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 3.25 }}
                    >
                        <span className='text-2xl font-medium'>Profit per Bar</span>
                        <span className='text-2xl text-brand'>${profitPerBar.toFixed(2)}</span>
                    </motion.div>
                    <motion.div
                        className='flex w-full flex-row justify-between rounded-lg border border-black/10 bg-neutral-200/20 px-4 py-2 shadow-sm'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 3.5 }}
                    >
                        <span className='text-2xl font-medium'>Profit Margin</span>
                        <span className='text-2xl text-brand'>${profitMargin.toFixed(2)}</span>
                    </motion.div>
                </motion.div>
            </div>
            <div className='relative hidden w-1/3 xl:flex'>
                <motion.span
                    initial={{ opacity: 0, rotate: -20, scale: 0.5, x: '-25%', scaleX: 0.85, scaleY: 1.05 }}
                    whileInView={{ opacity: 1, rotate: 0, scale: 1, x: '-25%', scaleX: 0.85, scaleY: 1.05 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 12, duration: 0.5, delay: 0.75 }}
                    className='sticky top-32 h-fit font-light text-primary/35'
                >
                    <PiCurrencyDollarThin size={1024} />
                </motion.span>
            </div>
        </div>
    );
};
