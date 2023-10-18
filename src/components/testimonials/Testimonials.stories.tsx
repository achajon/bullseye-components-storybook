import type { Meta, StoryObj } from '@storybook/react';

import { Testimonials } from 'components-bullseye';

const meta: Meta<typeof Testimonials> = {
    component: Testimonials,
    tags: ['autodocs'],
    title: 'Testimonials',
    argTypes: {
    }
}

export default meta;

const testimonialsSample = [
    {
      id: 1,
      description:
        "Hi, I just wanted to say thanks for the great theme. I’m finding new ways to improve it every day and find that it’s been the most user-friendly theme I’ve ever purchased. I am practically computer illiterate and know extremely little if anything at all about code, CSS, or any of the inner workings of a website. ",
      author: "Justin Moran, Sales Director at Michagan Wood Pellet Fuel",
    },
    {
      id: 2,
      description:
        "If I could give 100 stars for support and attention to detail I definitely would. I’ve purchased a good number of WordPress themes from various developers that look good on Themeforest but after you buy them you find numerous problems, bugs, crazy admin and very very poor support. I purchased the Avada theme and there were a couple of problems too, but the guys from ThemeFusion were remarkable.",
      author: "Dennis Seaman, Pres/Co Founder Sea Yu Enterprises",
    },
  ];

const TwoTestimonialsArgs = {
    title: "Testimonials",
    testimonials: testimonialsSample,
};

type Story = StoryObj<typeof meta>;

export const SocialMediaIconsSample:Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <Testimonials {...TwoTestimonialsArgs}/>
    </div>
}