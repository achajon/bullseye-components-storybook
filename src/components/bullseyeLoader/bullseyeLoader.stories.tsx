import type { Meta, StoryObj } from '@storybook/react';

import { BullseyeLoader } from 'components-bullseye';

const meta: Meta<typeof BullseyeLoader> = {
    component: BullseyeLoader,
    tags: ['autodocs'],
    title: 'BullseyeLoader',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BullseyeBrandingStorybook: Story = {

}