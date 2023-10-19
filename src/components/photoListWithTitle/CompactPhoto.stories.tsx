import type { Meta, StoryObj } from '@storybook/react';

import { CompactPhotoWithTitle } from 'components-bullseye';

const meta: Meta<typeof CompactPhotoWithTitle> = {
    component: CompactPhotoWithTitle,
    tags: ['autodocs'],
    title: 'CompactPhotoWithTitle',
    args: {
        title: "this is my title", 
        items:[
            { 
                id: 1, 
                image: "http://picsum.photos/200/200", 
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare condimentum justo ut congue. Etiam quis felis luctus, scelerisque lacus quis, viverra enim. Donec elementum blandit tempor. Mauris in nisl sapien. Cras ac ex egestas ligula porta ornare. Maecenas in elementum elit." 
            }
        ], 
        defaultImage:"http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png",
        moreUrl: "https://www.google.com/",
        isExternalLink: false
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const compactPhotoWithTitle: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactPhotoWithTitle {...args} />
    </div>
}

export const compactPhotoWithTitleMore: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactPhotoWithTitle {...args} moreUrl={"https://www.google.com/"} isExternalLink={!args.isExternalLink}/>
    </div>
}

export const compactPhotoWithDefaultImage: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactPhotoWithTitle {...args} defaultImage={""}/>
    </div>
}

export const compactPhotoWithTitleAsURL: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactPhotoWithTitle {...args} isExternalLink={true}/>
    </div>
}