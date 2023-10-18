import type { Meta, StoryObj } from '@storybook/react';

import { Address } from 'components-bullseye';

const meta: Meta<typeof Address> = {
    component: Address,
    tags: ['autodocs'],
    title: 'Address',
    argTypes: {
    },
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

export default meta;

type Story = StoryObj<typeof meta>;

export const address: Story = {
    render: (args, { globals: { showInCard } }) =>
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <Address {...args} shortAddress={args.showViewPhoneNumber}/>
    </div>
}

export const shortAddress: Story = {
    render: (args, { globals: { showInCard } }) =>
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <Address {...args} shortAddress={!args.showViewPhoneNumber}/>
    </div>
}