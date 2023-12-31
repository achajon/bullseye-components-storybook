import type { Meta, StoryObj } from '@storybook/react';

import { GalleryImages } from 'components-bullseye';

const meta: Meta<typeof GalleryImages> = {
    component: GalleryImages,
    tags: ['autodocs'],
    title: 'GalleryImages',
    args: {
        title: "My own title",
        photos: [
            { id: '1', imageURL: "https://picsum.photos/251/250.jpg", alternativeText: "Alternative text" },
            { id: '2', imageURL: "https://picsum.photos/251/251.jpg", alternativeText: "Alternative text" },
            { id: '3', imageURL: "https://picsum.photos/252/250.jpg", alternativeText: "Alternative text" },
            { id: '4', imageURL: "https://picsum.photos/252/251.jpg", alternativeText: "Alternative text" },
            { id: '5', imageURL: "https://picsum.photos/253/250.jpg", alternativeText: "Alternative text" },
            { id: '6', imageURL: "https://picsum.photos/253/251.jpg", alternativeText: "Alternative text" },
            { id: '7', imageURL: "https://picsum.photos/254/250.jpg", alternativeText: "Alternative text" },
            { id: '8', imageURL: "https://picsum.photos/254/251.jpg", alternativeText: "Alternative text" },
        ],
        showModalOnClick: false
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const masonGallery: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <GalleryImages {...args} />
    </div>
}

export const ModalMasonGallery: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <GalleryImages {...args} showModalOnClick={true}/>
    </div>
}