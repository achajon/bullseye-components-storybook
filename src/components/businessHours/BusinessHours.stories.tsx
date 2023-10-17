import type { Meta, StoryObj } from '@storybook/react';

import { BusinessHours } from 'components-bullseye';

const meta: Meta<typeof BusinessHours> = {
    component: BusinessHours,
    tags: ['autodocs'],
    title: 'BusinessHours',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const BusinessHourArgs = {
    isClose: true,
    showAccordion: true,
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
};

export const BusinessHourExample: Story = {
    render: (args, { globals: { showInCard } }) =>
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <BusinessHours {...BusinessHourArgs} />
    </div>
}