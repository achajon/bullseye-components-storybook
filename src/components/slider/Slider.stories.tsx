import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from 'components-bullseye';

const meta: Meta<typeof Slider> = {
    component: Slider,
    tags: ['autodocs'],
    title: 'Slider',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;



export const PhotoListWithTitleMaxItemsArgs: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>

    </div>
}