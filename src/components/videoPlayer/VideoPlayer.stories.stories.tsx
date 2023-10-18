import type { Meta, StoryObj } from '@storybook/react';

import { VideoPlayer } from 'components-bullseye';

const meta: Meta<typeof VideoPlayer> = {
    component: VideoPlayer,
    tags: ['autodocs'],
    title: 'VideoPlayer',
    argTypes: {
    }
}

export default meta;

const videoPlayerTemplateArgs = {
    title: "Container Video Title",
    videoList: ["https://www.youtube.com/watch?v=1EA_o_Afxxw&t=1s"],
    height: 500,
    light: false
};

type Story = StoryObj<typeof meta>;

export const SocialMediaIconsSample:Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <VideoPlayer {...videoPlayerTemplateArgs}/>
    </div>
}