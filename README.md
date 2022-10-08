# React Minimal Gallery [![npm version](https://badge.fury.io/js/react-minimal-gallery.svg)](https://badge.fury.io/js/react-minimal-gallery)

React Minimal Gallery is a minimalist image gallery build with tailwincss for simple projects.

## Features

* Thumbnail pagination
* Custom styles
* Responsive design

## Getting started

React Minimal Gallery requires **React 16.0.0 or later.**

npm:

```
npm install react-minimal-gallery
```

yarn:

```
yarn add react-minimal-gallery
```

### Example

```js
import ReactMinimalGallery from 'react-minimal-gallery';

const images = [
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
];

const MyGallery: React.FC = () => {
  return (
    <ReactMinimalGallery
      images={images}
      width={400}
      thumbnailWidth={100}
      hoverColor="#2DC573"
      paginationColor='#1a1a1a'
    />
  )
}
```

# Props

  * Available Properties

  * `images` - array of objects with title and url properties
  * `containerClassName` - string with tailwindcss properties
  * `mainImageClassName` - string with tailwindcss properties
  * `paginationColor` - string with hex color
  * `hoverColor` - string with hex color
  * `width` - string or number
  * `thumbnailWidth` - string or number

# Contributing

Each PR should be specific and isolated to the issue you're trying to fix. Please do not stack features/chores/refactors/enhancements in one PR. Describe your feature/implementation in the PR. If you're unsure its useful or if it is a major change, please open an issue first and get feedback.

* Follow eslint provided
* Comment your code
* Write [clean](https://github.com/ryanmcdermott/clean-code-javascript) code

# Build the example locally (requires node >= 12.13)

```
git clone https://github.com/scarvalhos/react-minimal-gallery.git
cd react-minimal-gallery
npm install --global yarn
yarn
yarn start
```

Then open [`localhost:3000`](http://localhost:3000) in a browser.

# License

MIT