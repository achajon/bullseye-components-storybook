import type { Meta, StoryObj } from '@storybook/react';

import { PhotoListWithTitle } from 'components-bullseye';

const meta: Meta<typeof PhotoListWithTitle> = {
    component: PhotoListWithTitle,
    tags: ['autodocs'],
    title: 'PhotoListWithTitle',
    args:   { 
        title: "Title Example", 
        items:[
            { 
                id: 1,
                image: "http://picsum.photos/200/200", 
                body: "Example body text 1" 
            },  
            { 
                id: 2,
                image: "http://picsum.photos/202/200",
                body: "Example body text 2" 
            }, 
            { 
                id: 3,
                image: "http://picsum.photos/202/200",
                body: "Example body text 3" 
            }
        ], 
        maxItemsToDisplay: 3
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const photoListWithTitle: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <PhotoListWithTitle {...args} />
    </div>
}

export const photoListWithTitleMaxItems: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <PhotoListWithTitle {...args} maxItemsToDisplay={1}/>
    </div>
}

const photoListWithTitleURLArgs = {
    title: "Title Example", 
        items:[
            { 
                id: 1,
                image: "http://picsum.photos/200/200", 
                body: "Example body text 1",
                url: "www.google.com"
            },  
            { 
                id: 2,
                image: "http://picsum.photos/202/200",
                body: "Example body text 2" ,
                url: "www.google.com"
            }, 
            { 
                id: 3,
                image: "http://picsum.photos/202/200",
                body: "Example body text 3",
                url: "www.google.com"
            }
        ], 
        maxItemsToDisplay: 3
}

const photoListWithTitleURLInNewTabArgs = {
    title: "Title Example", 
        items:[
            { 
                id: 1,
                image: "http://picsum.photos/200/200", 
                body: "Example body text 1",
                url: "www.google.com",
                inNewTab: true
            },  
            { 
                id: 2,
                image: "http://picsum.photos/202/200",
                body: "Example body text 2" ,
                url: "www.google.com",
                inNewTab: true
            }, 
            { 
                id: 3,
                image: "http://picsum.photos/202/200",
                body: "Example body text 3",
                url: "www.google.com",
                inNewTab: true
            }
        ], 
        maxItemsToDisplay: 3
}

export const photoListWithTitleURL: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <PhotoListWithTitle {...photoListWithTitleURLArgs}/>
    </div>
}

export const photoListWithTitleURLInNewTab: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <PhotoListWithTitle {...photoListWithTitleURLInNewTabArgs}/>
    </div>
}