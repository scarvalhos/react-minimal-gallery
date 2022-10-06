import * as React from 'react'

import { c } from './utils'

import './styles.css'

interface FileRecord {
  url: string
  title: string
}

interface GalleryProps {
  images: FileRecord[]
  containerClassName?: string
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  containerClassName = 'w-[300px] space-y-1',
}) => {
  const [mainImage, setMainImage] = React.useState(images[0])

  const [hover, setHover] = React.useState(false)

  const onThumbnailMouseOver = React.useCallback((image: FileRecord) => {
    setMainImage(image)
  }, [])

  return (
    <div className={c(containerClassName)}>
      <div className="w-[300px] h-[300px] overflow-hidden rounded-sm">
        <div
          className={c('bg-cover bg-center h-full w-full rounded-sm')}
          style={{
            backgroundImage: `url(${mainImage.url})`,
            transform: hover ? 'scale(2)' : 'scale(1)',
            cursor: hover ? 'zoom-out' : 'zoom-in',
          }}
          onClick={() => setHover(!hover)}
          onMouseLeave={() => setHover(false)}
          id="main-image"
        />
      </div>

      <div className="w-full bg-black flex flex-row space-x-1">
        {images.slice(0, 3).map((image) => (
          <div
            key={image.url}
            onMouseOver={() => onThumbnailMouseOver(image)}
            className="w-[100px] h-[100px] transition-all border-[1.5px] border-transparent rounded-sm hover:border-red-500"
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-sm"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
