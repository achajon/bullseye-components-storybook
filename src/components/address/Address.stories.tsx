import type { Meta, StoryObj } from '@storybook/react';

import { Address } from 'components-bullseye';

const meta: Meta<typeof Address> = {
    component: Address,
    tags: ['autodocs'],
    title: 'Address',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const AddressStorybook: Story = {
    args: {
        address1: "3121 US Highway 22",
        address2: "Suite 305",
        city: "Branchburg",
        stateAbbr: "NJ",
        postalCode: "08876",
        country: "United States",
        phone: "(201) 123-1234",
    }
}