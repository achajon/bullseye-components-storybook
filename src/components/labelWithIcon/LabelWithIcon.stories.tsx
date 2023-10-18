import type { Meta, StoryObj } from '@storybook/react';

import { LabelWithIcon } from 'components-bullseye';

const meta: Meta<typeof LabelWithIcon> = {
    component: LabelWithIcon,
    tags: ['autodocs'],
    title: 'Label with Icon',
    argTypes: {
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

const labelWithIconSampleArgs = {
    btIcon: { btIconName: "phone", size: 25 },
    title: "(201) 123-5645",
    url: "https://bullseyelocations.com",
  };

export const CardWithImageStorybook: Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <LabelWithIcon {...labelWithIconSampleArgs} />
    </div>
}