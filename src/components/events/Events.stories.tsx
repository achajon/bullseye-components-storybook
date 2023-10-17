import type { Meta, StoryObj } from '@storybook/react';

import { Events } from 'components-bullseye';

const meta: Meta<typeof Events> = {
    component: Events,
    tags: ['autodocs'],
    title: 'Events',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const eventListArgs = {
    title: "This is my content title",
    eventList: [
      {
        EventId: 1,
        StartDate: "01/05/2022 11:00 AM",
        EndDate: "01/06/2022 11:15 AM",
        EventTitle: "My Event 1",
        EventDescription: "this is my event description",
        RegistrationURL: "#",
      },
      {
        EventId: 2,
        StartDate: "02/10/2022 02:00 PM",
        EndDate: "02/11/2022 03:30 PM",
        EventTitle: "My Event 2",
        EventDescription: "this is my event 2 description",
        RegistrationURL: "#",
      },
      {
        EventId: 3,
        StartDate: "04/20/2022 08:00",
        EndDate: "04/21/2022 13:00",
        EventTitle: "My Event 3",
        EventDescription: "this is my event 3 description",
        RegistrationURL: "#",
      }
    ],
    maxItemsToDisplay: 0,
    showDateLikeDescription: false,
  };


export const CardWithImageStorybook: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <Events {...eventListArgs
        } />
    </div>
}