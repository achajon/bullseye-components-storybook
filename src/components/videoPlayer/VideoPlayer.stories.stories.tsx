import type { Meta, StoryObj } from '@storybook/react';

import { VideoPlayer } from 'components-bullseye';

const meta: Meta<typeof VideoPlayer> = {
    component: VideoPlayer,
    tags: ['autodocs'],
    title: 'VideoPlayer',
    args: {
        title: "Container Video Title",
        videoList: ["https://www.youtube.com/watch?v=1EA_o_Afxxw&t=1s"],
        height: 500,
        light: false
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const VideoPlayerWithAutoPlaying:Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <VideoPlayer {...args} autoPlaying={true}/>
    </div>
}

export const VideoPlayerWithPreviewImage:Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <VideoPlayer {...args} autoPlaying={true} light={"https://enviragallery.com/wp-content/uploads/2015/12/videogallery.png"}/>
    </div>
}

export const VideoPlayerWithCustomCSSTitle:Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <VideoPlayer {...args} titleCssClass='bg-black'/>
    </div>
}

export const VideoPlayerWithMultipleVideos:Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <VideoPlayer {...args} 
            videoList={
                [
                    "https://www.youtube.com/watch?v=1EA_o_Afxxw&t=1s",
                    "https://www.youtube.com/watch?v=EqgicR3Sw8Y&ab_channel=BullseyeLocations",
                    "https://www.youtube.com/watch?v=jrlHXA5wpfw&t=42s&ab_channel=BullseyeLocations"
                ]
            }
        />
    </div>
}