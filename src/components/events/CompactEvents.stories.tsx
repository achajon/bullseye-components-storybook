import type { Meta, StoryObj } from '@storybook/react';

import { CompactEvent } from 'components-bullseye';

const meta: Meta<typeof CompactEvent> = {
    component: CompactEvent,
    tags: ['autodocs'],
    title: 'CompactEvent',
    args: {
        title :"This is my content title",
        eventList:[{EventId:1,StartDate:"01/05/2022",EventTitle:"My Event 1"}],
        eventMoreUrl:"#",
        showLandingPageLinkTarget: "Link"
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const compactEvent: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactEvent {...args} />
    </div>
}

export const compactEventWithURL: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactEvent {...args} eventMoreUrl="https://www.bullseyelocations.com/"/>
    </div>
}