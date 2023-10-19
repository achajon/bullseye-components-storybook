import type { Meta, StoryObj } from '@storybook/react';

import { SocialMediaIcons } from 'components-bullseye';

const meta: Meta<typeof SocialMediaIcons> = {
    component: SocialMediaIcons,
    tags: ['autodocs'],
    title: 'SocialMediaIcons',
    args: {
      title: "Follow us on",
      icons: [   {
        name: "instagram",
        icon:
          "https://www.bullseyelocations-staging.com/local/images/instagram.svg",
        url: "#",
      },
      {
        name: "linkedin",
        icon: "https://www.bullseyelocations-staging.com/local/images/linkedin.svg",
        url: "#",
      },
      {
        name: "facebook",
        icon: "https://www.bullseyelocations-staging.com/local/images/facebook.svg",
        url: "#",
      },
      {
        name: "twitter",
        icon: "https://www.bullseyelocations-staging.com/local/images/twitter.svg",
        url: "#",
      },
      {
        name: "pinterest",
        icon:
          "https://www.bullseyelocations-staging.com/local/images/pinterest.svg",
        url: "#",
      },
      {
        name: "yelp",
        icon:
          "https://www.bullseyelocations-staging.com/local/images/pinterest.svg",
        url: "#",
      }],
      iconBasePath: "",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const SocialMediaIconsWithTitle:Story = {
  render: (args, { globals: { showInCard } }) => 
  <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
      <SocialMediaIcons {...args}/>
  </div>
}
const socialMediaIconsWithoutTitle = {
    icons: [   {
      name: "instagram",
      icon:
        "https://www.bullseyelocations-staging.com/local/images/instagram.svg",
      url: "#",
    },
    {
      name: "linkedin",
      icon: "https://www.bullseyelocations-staging.com/local/images/linkedin.svg",
      url: "#",
    },
    {
      name: "facebook",
      icon: "https://www.bullseyelocations-staging.com/local/images/facebook.svg",
      url: "#",
    },
    {
      name: "twitter",
      icon: "https://www.bullseyelocations-staging.com/local/images/twitter.svg",
      url: "#",
    },
    {
      name: "pinterest",
      icon:
        "https://www.bullseyelocations-staging.com/local/images/pinterest.svg",
      url: "#",
    },
    {
      name: "yelp",
      icon:
        "https://www.bullseyelocations-staging.com/local/images/pinterest.svg",
      url: "#",
    }],
    iconBasePath: "",
  }

export const socialMediaIcons:Story = {
    render: (args, { globals: { showInCard } }) => 
    <div className={showInCard === "Yes" ? "card shadow-sm p-3 mt-3" : ""}>
        <SocialMediaIcons {...socialMediaIconsWithoutTitle}/>
    </div>
}