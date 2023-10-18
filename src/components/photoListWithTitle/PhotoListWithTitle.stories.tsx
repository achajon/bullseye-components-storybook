import type { Meta, StoryObj } from '@storybook/react';

import { PhotoListWithTitle } from 'components-bullseye';

const meta: Meta<typeof PhotoListWithTitle> = {
    component: PhotoListWithTitle,
    tags: ['autodocs'],
    title: 'PhotoListWithTitle',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const photoListWithTitleMaxItemsArgs = {
    title: "Title Example", 
    items:[
        { 
            id: 1, 
            image: "http://picsum.photos/200/200", 
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare condimentum justo ut congue. Etiam quis felis luctus, scelerisque lacus quis, viverra enim. Donec elementum blandit tempor. Mauris in nisl sapien. Cras ac ex egestas ligula porta ornare. Maecenas in elementum elit. Nullam posuere lorem lacus, tempor tempor purus ullamcorper id. Integer non lobortis tellus, vitae venenatis neque. Nullam vitae leo ut elit pellentesque malesuada a at nisl. Donec laoreet mi tellus, quis gravida dui porta ac. Fusce viverra finibus libero vel egestas. Sed rutrum massa ullamcorper, tristique enim eget, laoreet diam. Fusce neque enim, consequat in orci non, mollis faucibus turpis." },
        { 
            id: 2, 
            image: "http://picsum.photos/201/200", 
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare condimentum justo ut congue. Etiam quis felis luctus, scelerisque lacus quis, viverra enim. Donec elementum blandit tempor. Mauris in nisl sapien. Cras ac ex egestas ligula porta ornare. Maecenas in elementum elit. Nullam posuere lorem lacus, tempor tempor purus ullamcorper id. Integer non lobortis tellus, vitae venenatis neque. Nullam vitae leo ut elit pellentesque malesuada a at nisl. Donec laoreet mi tellus, quis gravida dui porta ac. Fusce viverra finibus libero vel egestas. Sed rutrum massa ullamcorper, tristique enim eget, laoreet diam. Fusce neque enim, consequat in orci non, mollis faucibus turpis." 
        },
        { 
            id: 2, 
            image: "http://picsum.photos/202/200", 
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare condimentum justo ut congue. Etiam quis felis luctus, scelerisque lacus quis, viverra enim. Donec elementum blandit tempor. Mauris in nisl sapien. Cras ac ex egestas ligula porta ornare. Maecenas in elementum elit. Nullam posuere lorem lacus, tempor tempor purus ullamcorper id. Integer non lobortis tellus, vitae venenatis neque. Nullam vitae leo ut elit pellentesque malesuada a at nisl. Donec laoreet mi tellus, quis gravida dui porta ac. Fusce viverra finibus libero vel egestas. Sed rutrum massa ullamcorper, tristique enim eget, laoreet diam. Fusce neque enim, consequat in orci non, mollis faucibus turpis." 
        }
    ], 
    maxItemsToDisplay: 3
};

export const PhotoListWithTitleMaxItemsArgs: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <PhotoListWithTitle {...photoListWithTitleMaxItemsArgs} />
    </div>
}