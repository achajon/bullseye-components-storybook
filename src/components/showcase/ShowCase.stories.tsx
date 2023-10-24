import type { Meta, StoryObj } from '@storybook/react';

import { PhotoListWithTitle, Showcase } from 'components-bullseye';

const benefits = [
  {
    id: 1,
    iconUrl: "/images/benefits/benefit_icons.svg#benefit_globe",
    title: "Fully ABC-Certified Profesional",
    body:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    iconUrl: "/images/benefits/benefit_icons.svg#benefit_stopwatch",
    title: "Satisfaction and Top-Tier Performance Guaranteed",
    body:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    iconUrl: "/images/benefits/benefit_icons.svg#benefit_thumbsup",
    title: "Award-Winning",
    body:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    iconUrl: "/images/benefits/benefit_icons.svg#benefit_thumbsup",
    title: "Award-Winning",
    body:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    links: [
      { url: "https://www.bullseyelocations.com", title: "Bullseye Locator" },
      { url: "https://www.bullseyelocations.com", title: "Our Team" },
      { url: "https://www.bullseyelocations.com", title: "Download our app" },
    ],
  },
];

const meta: Meta<typeof PhotoListWithTitle> = {
  component: PhotoListWithTitle,
  tags: ['autodocs'],
  title: 'ShowCase',
  argTypes: {
  },
  args: {
    title: "Benefits",
    maxItemsToDisplay: 3,
    items: benefits,
  }
}

export default meta;

type Story = StoryObj<typeof meta>;



export const BenefitsArgs = {
  title: "Benefits",
  maxItemsToDisplay: 3,
  items: benefits,
};

export const ShowcaseLinks: Story = {
  render: (args, { globals: { showInCard } }) =>
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
      <Showcase {...BenefitsArgs} />
    </div>
}