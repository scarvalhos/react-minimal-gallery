import * as React from 'react'

import { TbArrowRight, TbArrowLeft } from 'react-icons/tb'
import { ReactMinimalGalleryProps } from '../types'
import { randomId, strtonum } from '../utils'

import {
  ArrowButton,
  Container,
  MainImage,
  MainImageContainer,
  Thumbnail,
  ThumbnailsContainer,
  ThumbnailsContent,
} from './ReactMinimalGallery.styles'

import '../styles.css'

interface StateProps {
  translate?: string
  hover?: boolean
  count?: number
  x?: number
  y?: number
}

export const ReactMinimalGallery: React.FC<ReactMinimalGalleryProps> = ({
  containerClassName = 'tw-w-[300px] tw-space-y-1',
  mainImageClassName,
  thumbnailWidth = 100,
  hoverColor,
  images,
  height = 400,
  width = 400,
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

  const [{ hover, count, x, y, translate }, dispatch] = React.useReducer(
    (prev: StateProps, next: StateProps) => {
      return { ...prev, ...next }
    },
    {
      hover: false,
      count: 0,
      x: undefined,
      y: undefined,
      translate: '0px',
    }
  )

  const [mainImage, setMainImage] = React.useState<{
    id: string
    url: string
  } | null>(imagesArr[count!])

  const tw = React.useMemo(
    () =>
      typeof thumbnailWidth === 'string'
        ? strtonum(thumbnailWidth)
        : thumbnailWidth,
    [thumbnailWidth]
  )

  React.useLayoutEffect(() => {
    dispatch({ count: 0, translate: '0px' })
  }, [imagesArr])

  React.useEffect(() => {
    setMainImage(imagesArr[count!])
    dispatch({ translate: `-${count! * (tw - tw / count!)}px` })
  }, [count, imagesArr, tw])

  return (
    <Container
      // @ts-ignore
      className={containerClassName}
      style={{
        width,
        height:
          typeof height === 'string' ? strtonum(height) + tw : height + tw,
      }}
    >
      <MainImageContainer
        style={{
          width,
          height,
        }}
      >
        <ArrowButton
          side="left"
          disabled={count === 0}
          onClick={() => dispatch({ count: count! - 1 })}
        >
          <TbArrowLeft className="tw-w-4 tw-h-4 tw-text-white" />
        </ArrowButton>

        <ArrowButton
          side="right"
          disabled={count === imagesArr.length - 1}
          onClick={() => dispatch({ count: count! + 1 })}
        >
          <TbArrowRight className="tw-w-4 tw-h-4 tw-text-white" />
        </ArrowButton>

        <MainImage
          hover={hover ? 'true' : 'false'}
          className={mainImageClassName}
          style={{
            backgroundImage: `url(${mainImage?.url})`,
            transformOrigin: `${x}px ${y}px`,
          }}
          onClick={() => dispatch({ hover: !hover })}
          onMouseLeave={() => dispatch({ hover: false })}
          onMouseMove={(e) => {
            if (hover) {
              dispatch({ y: e.clientY, x: e.clientX })
            }
          }}
        />
      </MainImageContainer>

      <ThumbnailsContainer>
        <ThumbnailsContent
          style={{
            transform: `translateX(${translate})`,
          }}
        >
          {imagesArr.map((image) => (
            <Thumbnail
              key={image.id}
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
                dispatch({
                  count: Number(
                    imagesArr.lastIndexOf(
                      imagesArr.find((i) => i.id === image.id) as any
                    )
                  ),
                })
              }}
            />
          ))}
        </ThumbnailsContent>
      </ThumbnailsContainer>
    </Container>
  )
}
