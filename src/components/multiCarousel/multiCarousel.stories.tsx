import type { Meta, StoryObj } from '@storybook/react';

import { MultiCarousel } from 'components-bullseye';

const meta: Meta<typeof MultiCarousel> = {
    component: MultiCarousel,
    tags: ['autodocs'],
    title: 'MultiCarousel',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const multiCarouselTemplateArgs = { 
    photos:[  
        { 
            id:'1', 
            titleImage:"Title image 1",
            imageURL:"https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
            alternativeText:"Description for photo 1" 
        },
        { 
            id:'2',
            titleImage:"Title image 2",
            imageURL:"https://geographical.co.uk/media/k2/items/cache/852c2fa5e5468761c3ae8b796ca9be85_XL.jpg",
            alternativeText:"Description for photo 2" 
        },
        { 
            id:'3', 
            titleImage:"Title image 3",
            imageURL:"https://theuiaa.org/wp-content/uploads/2017/11/RTM19-banner-web.jpg",
            alternativeText:"Description for photo 3" 
        }], 
    title:"This is the main title", 
    itemNumber:1, 
  };

export const CardWithImageStorybook: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <MultiCarousel {...multiCarouselTemplateArgs} />
    </div>
}