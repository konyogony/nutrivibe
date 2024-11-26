'use client';

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { cricketsPrice, oatmealPrice, otherIngredientsPrice, sweetenersPrice } from '@/config';
import { Pie, PieChart } from 'recharts';

// Chart data for protein bar ingredients
const chartData = [
    { ingredient: 'Crickets', cost: cricketsPrice, fill: '#FF9999' }, // Light red for crickets
    { ingredient: 'Oatmeal', cost: oatmealPrice, fill: '#66B2FF' }, // Light blue for oatmeal
    { ingredient: 'Maltitol & Sucralose', cost: sweetenersPrice, fill: '#99FF99' }, // Light green for sweetener
    { ingredient: 'Peanut Butter/Honey/Milk', cost: otherIngredientsPrice, fill: '#FFCC99' }, // Light orange for peanut butter/honey/milk
];

const chartConfig = {
    crickets: {
        label: 'Crickets',
        color: '#FF9999', // Light red for crickets
    },
    oatmeal: {
        label: 'Oatmeal',
        color: '#66B2FF', // Light blue for oatmeal
    },
    sweetener: {
        label: 'Maltitol & Sucralose',
        color: '#99FF99', // Light green for sweetener
    },
    peanut: {
        label: 'Peanut Butter/Honey/Milk',
        color: '#FFCC99', // Light orange for peanut butter/honey/milk
    },
} satisfies ChartConfig;

export const Chart = () => {
    return (
        <ChartContainer
            config={chartConfig}
            className='aspect-square w-[80%] pb-0 md:w-1/3 [&_.recharts-pie-label-text]:fill-foreground'
        >
            <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={chartData} dataKey='cost' label nameKey='ingredient' fill='#8884d8' />
            </PieChart>
        </ChartContainer>
    );
};
