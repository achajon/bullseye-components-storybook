import type { Meta, StoryObj } from '@storybook/react';

import { CompactPhotoWithTitle } from 'components-bullseye';

const meta: Meta<typeof CompactPhotoWithTitle> = {
    component: CompactPhotoWithTitle,
    tags: ['autodocs'],
    title: 'CompactPhotoListWithTitle',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const compactPhotoWithTitleArgs = { 
    title: "this is my title", 
    items:[
        { 
            id: 1, 
            image: "http://picsum.photos/200/200", 
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare condimentum justo ut congue. Etiam quis felis luctus, scelerisque lacus quis, viverra enim. Donec elementum blandit tempor. Mauris in nisl sapien. Cras ac ex egestas ligula porta ornare. Maecenas in elementum elit." 
        }
    ], 
    defaultImage:"http://www.keystonetrust.org.uk/wp-content/uploads/2020/06/placeholder-image-1.png"
};

export const PhotoListWithTitleMaxItemsArgs: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <CompactPhotoWithTitle {...compactPhotoWithTitleArgs} />
    </div>
}