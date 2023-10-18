import type { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from 'components-bullseye';

const meta: Meta<typeof LinkButton> = {
    component: LinkButton,
    tags: ['autodocs'],
    title: 'Link Button',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const LinkButtonSampleArgs = {
    title: "Directions",
    url: "https://www.bullseyelocations.com",
};

export const CardWithImageStorybook: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <LinkButton {...LinkButtonSampleArgs} />
    </div>
}