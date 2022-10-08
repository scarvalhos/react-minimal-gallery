import * as React from 'react'

import { FileRecord, ReactMinimalGalleryProps } from '../typing/index'
import { c, strtonum } from '../utils/index'

import '../styles.css'

export const ReactMinimalGallery: React.FC<ReactMinimalGalleryProps> = ({
  images,
  containerClassName = 'w-[300px] space-y-1',
  mainImageClassName,
  paginationColor = '#1a1a1a',
  width = 400,
  thumbnailWidth = 100,
  hoverColor,
}) => {
  const w = typeof width === 'string' ? strtonum(width) : width
  const tw =
    typeof thumbnailWidth === 'string'
      ? strtonum(thumbnailWidth)
      : thumbnailWidth

  const [mainImage, setMainImage] = React.useState(images[0])
  const [hover, setHover] = React.useState(false)
  const [count, setCount] = React.useState(1)

  const onThumbnailMouseOver = React.useCallback((image: FileRecord) => {
    setMainImage(image)
  }, [])

  const counter = Math.ceil(images.length / (w / tw))

  const paginationCounter = []

  for (var i = 0; i < counter; i++) {
    paginationCounter.push(i + 1)
  }

  const imagesSliced = images.slice(
    Math.floor(w / tw) * (count - 1),
    (count + 1) * Math.ceil(w / tw)
  )

  return (
    <div
      className={c(containerClassName)}
      style={{
        width: `${w}px`,
        height: `${w}px`,
      }}
    >
      <div
        className={c('overflow-hidden rounded-sm')}
        style={{
          width: `${w}px`,
          height: `${w}px`,
        }}
      >
        <div
          className={c(
            'bg-cover bg-center h-full w-full rounded-sm',
            mainImageClassName
          )}
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

      <div className="w-full flex flex-row space-x-1 overflow-hidden scrollbar-hidden">
        <div className={c('flex flex-row rounded-sm transition-all')}>
          {imagesSliced.map((image) => (
            <div
              key={image.title}
              className="rounded-sm"
              style={{
                width: `${tw}px`,
                height: `${tw}px`,
              }}
            >
              <div
                className={c(
                  'w-full h-full bg-no-repeat bg-cover bg-center transition-all ease-in rounded-sm border-[2px] border-transparent'
                )}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
                onMouseOver={(e: any) => {
                  e.target.style.borderColor = hoverColor
                  onThumbnailMouseOver(image)
                }}
                onMouseLeave={(e: any) =>
                  (e.target.style.borderColor = 'transparent')
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1 pt-2">
        {paginationCounter.map((i) => (
          <button
            key={i}
            className="w-5 h-5 rounded-full text-white text-[10px] transition-all"
            style={{
              background: paginationColor,
              opacity: count === i ? '1' : '0.6',
            }}
            onClick={() => setCount(i)}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  )
}
