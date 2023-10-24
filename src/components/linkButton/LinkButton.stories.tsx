import type { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from 'components-bullseye';

const icons = { icon: "https://cdn-icons-png.flaticon.com/128/949/949647.png", size: 20 }

const meta: Meta<typeof LinkButton> = {
    component: LinkButton,
    tags: ['autodocs'],
    title: 'Link Button',
    args: {
        icon: icons,
        title: "title",
        url: "https://example.com"

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