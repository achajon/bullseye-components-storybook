import type { Meta, StoryObj } from '@storybook/react';

import { CompactEvent } from 'components-bullseye';

const meta: Meta<typeof CompactEvent> = {
    component: CompactEvent,
    tags: ['autodocs'],
    title: 'CompactEvent',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const cardWithImageArgs = {
    title :"This is my content title",
    eventList:[{EventId:1,StartDate:"01/05/2022",EventTitle:"My Event 1"}],
    eventMoreUrl:"#"
}

export const CardWithImageStorybook: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactEvent {...cardWithImageArgs} />
    </div>
}