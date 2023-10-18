import type { Meta, StoryObj } from '@storybook/react';

import { BullseyeBranding } from 'components-bullseye';

const meta: Meta<typeof BullseyeBranding> = {
    component: BullseyeBranding,
    tags: ['autodocs'],
    title: 'BullseyeBranding',
    args:{
        brandingImageURL:"http://picsum.photos/200/200", 
        brandingTextURL:"#", 
        brandingText:"This is my branding text" 
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BullseyeBrandingStorybook: Story = {
    render: (args, { globals: { showInCard } }) =>
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <BullseyeBranding {...args}/>
    </div> 
}