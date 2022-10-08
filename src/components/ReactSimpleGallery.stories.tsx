import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ReactSimpleGallery } from './ReactSimpleGallery'

const Template: ComponentStory<typeof ReactSimpleGallery> = (args) => (
  <ReactSimpleGallery {...args} />
)

export const ReactSimpleGalleryTemplate = Template.bind({})
ReactSimpleGalleryTemplate.args = {
  hoverColor: '#2DC573',
  paginationColor: '#1a1a1a',
  width: '400px',
  thumbnailWidth: '100px',
  images: [
    {
      title: 'Image 01',
      url: 'https://hytzenshop.s3.amazonaws.com/fd3a2052a408a9cafde05ea4c2a23631-camiseta-justice-league-01.webp',
    },
    {
      title: 'Image 02',
      url: 'https://hytzenshop.s3.amazonaws.com/059576149ee92703886bf643b9cce4a9-camiseta-dc-comics-logo-04.png',
    },
    {
      title: 'Image 03',
      url: 'https://hytzenshop.s3.amazonaws.com/76369193225fdfcb9352bd98cd6c047f-camiseta-dc-comics-logo-02.png',
    },
  ],
}

export default {
  title: 'ReactSimpleGallery',
  component: ReactSimpleGallery,
} as ComponentMeta<typeof ReactSimpleGallery>
