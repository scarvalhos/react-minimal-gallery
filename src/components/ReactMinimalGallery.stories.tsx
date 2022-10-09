import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ReactMinimalGallery } from './ReactMinimalGallery'

const Template: ComponentStory<typeof ReactMinimalGallery> = (args) => (
  <ReactMinimalGallery {...args} />
)

export const ReactMinimalGalleryTemplate = Template.bind({})
ReactMinimalGalleryTemplate.args = {
  hoverColor: '#2DC573',
  width: '400px',
  thumbnailWidth: '100px',
  images: [
    'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2781760/pexels-photo-2781760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ],
}

export default {
  title: 'ReactMinimalGallery',
  component: ReactMinimalGallery,
} as ComponentMeta<typeof ReactMinimalGallery>
