import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ReactMinimalGallery } from './ReactMinimalGallery'

const Template: ComponentStory<typeof ReactMinimalGallery> = (args) => (
  <ReactMinimalGallery {...args} />
)

export const ReactMinimalGalleryTemplate = Template.bind({})
ReactMinimalGalleryTemplate.args = {
  hoverColor: '#2DC573',
  paginationColor: '#1a1a1a',
  width: '400px',
  thumbnailWidth: '100px',
  images: [
    {
      title: 'Image 01',
      url: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Image 04',
      url: 'https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Image 03',
      url: 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ],
}

export default {
  title: 'ReactMinimalGallery',
  component: ReactMinimalGallery,
} as ComponentMeta<typeof ReactMinimalGallery>
