import * as React from 'react'

import { TbArrowRight, TbArrowLeft } from 'react-icons/tb'
import { ReactMinimalGalleryProps } from '../types'
import { c, randomId, strtonum } from '../utils'

import '../styles.css'

export const ReactMinimalGallery: React.FC<ReactMinimalGalleryProps> = ({
  images,
  containerClassName = 'tw-w-[300px] tw-space-y-1',
  mainImageClassName,
  hoverColor,
  width = 400,
  height = 400,
  thumbnailWidth = 100,
}) => {
  const imagesArr = React.useMemo(
    () =>
      images.map((image) => {
        return {
          id: randomId(),
          url: image,
        }
      }),
    [images]
  )

  const [hover, setHover] = React.useState(false)
  const [count, setCount] = React.useState(0)

  const [mainImage, setMainImage] = React.useState<{
    id: string
    url: string
  } | null>(imagesArr[count])
  const [translate, setTranslate] = React.useState('0px')

  const tw = React.useMemo(
    () =>
      typeof thumbnailWidth === 'string'
        ? strtonum(thumbnailWidth)
        : thumbnailWidth,
    [thumbnailWidth]
  )

  React.useLayoutEffect(() => {
    setCount(0)
    setTranslate('0px')
  }, [imagesArr])

  React.useEffect(() => {
    setMainImage(imagesArr[count])
    setTranslate(`-${count * (tw - tw / count)}px`)
  }, [count, imagesArr, tw])

  return (
    <div
      className={c(containerClassName)}
      style={{
        width,
        height:
          typeof height === 'string' ? strtonum(height) + tw : height + tw,
      }}
    >
      <div
        className={c('tw-overflow-hidden tw-rounded-sm tw-relative')}
        style={{
          width,
          height,
        }}
      >
        <button
          className="tw-cursor-pointer tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-border-none tw-bg-black tw-bg-opacity-20 hover:tw-bg-opacity-50 tw-transition-all tw-absolute tw-left-2 tw-top-[50%] -tw-translate-y-[50%] tw-z-[999]"
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
        >
          <TbArrowLeft className="tw-w-4 tw-h-4 tw-text-white" />
        </button>
        <button
          className="tw-cursor-pointer tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-border-none tw-bg-black tw-bg-opacity-20 hover:tw-bg-opacity-50 tw-transition-all tw-absolute tw-right-2 tw-top-[50%] -tw-translate-y-[50%] tw-z-[999]"
          disabled={count === imagesArr.length - 1}
          onClick={() => setCount(count + 1)}
        >
          <TbArrowRight className="tw-w-4 tw-h-4 tw-text-white" />
        </button>
        <div
          className={c(
            'tw-bg-cover tw-bg-center tw-h-full tw-w-full tw-rounded-sm',
            mainImageClassName
          )}
          style={{
            backgroundImage: `url(${mainImage?.url})`,
            transform: hover ? 'scale(2)' : 'scale(1)',
            cursor: hover ? 'zoom-out' : 'zoom-in',
          }}
          onClick={() => setHover(!hover)}
          onMouseLeave={() => setHover(false)}
        />
      </div>

      <div className="tw-w-full tw-flex tw-flex-row tw-overflow-hidden">
        <div
          className={c(
            'tw-flex tw-flex-row tw-space-x-[0.5px] tw-rounded-sm tw-transition-all'
          )}
          style={{
            transform: `translateX(${translate})`,
          }}
        >
          {imagesArr.map((image) => (
            <div
              key={image.id}
              className={c(
                'tw-w-full tw-h-full tw-border-2 tw-border-solid tw-border-transparent tw-bg-no-repeat tw-bg-cover tw-bg-center tw-transition-all tw-ease-in tw-rounded-sm tw-cursor-pointer'
              )}
              style={{
                width: `${tw}px`,
                height: `${tw}px`,
                backgroundImage: `url(${image?.url})`,
                borderColor:
                  image?.id === mainImage?.id ? hoverColor : 'transparent',
              }}
              onMouseOver={(e: any) =>
                image?.id !== mainImage?.id &&
                (e.target.style.borderColor = hoverColor)
              }
              onMouseLeave={(e: any) =>
                image?.id !== mainImage?.id &&
                (e.target.style.borderColor = 'transparent')
              }
              onClick={() => {
                setCount(
                  Number(
                    imagesArr.lastIndexOf(
                      imagesArr.find((i) => i.id === image.id) as any
                    )
                  )
                )
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
