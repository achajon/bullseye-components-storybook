import type { Meta, StoryObj } from '@storybook/react';

import { BusinessHours } from 'components-bullseye';

const meta: Meta<typeof BusinessHours> = {
    component: BusinessHours,
    tags: ['autodocs'],
    title: 'Business hours',
    args:{
        isClose: false,
        showAccordion: false,
        smallAlert: "Cloosing soon",
        titleClass: "",
        daysArray:  [
            { day: "Wed (today)", hours: "9:00 AM - 8:00 PM" },
            { day: "Thu", hours: "9:00 AM - 8:00 PM" },
            { day: "Fri", hours: "9:00 AM - 8:00 PM" },
            { day: "Sat", hours: "9:00 AM - 8:00 PM" },
            { day: "Sun", hours: "9:00 AM - 8:00 PM" },
            { day: "Mon (Labor Day)", hours: "Close" },
            { day: "Tue", hours: "9:00 AM - 8:00 PM" },
        ]
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const BusinessHoursExpanded: Story = {
    render: (args, { globals: { showInCard } }) =>
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <BusinessHours {...args} showAccordion={args.showAccordion}/>
    </div>
}

export const BusinessHourAccordion: Story = {
    render: (args, { globals: { showInCard } }) =>
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <BusinessHours {...args} showAccordion={!args.showAccordion}/>
    </div>
}