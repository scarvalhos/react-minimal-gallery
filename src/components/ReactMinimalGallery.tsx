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
  h?: number
  w?: number
}

export const ReactMinimalGallery: React.FC<ReactMinimalGalleryProps> = ({
  containerClassName,
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

  const [{ hover, count, x, y, h, w, translate }, dispatch] = React.useReducer(
    (prev: StateProps, next: StateProps) => {
      return { ...prev, ...next }
    },
    {
      hover: false,
      count: 0,
      x: undefined,
      y: undefined,
      h: undefined,
      w: undefined,
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
    <div className="tw-w-full tw-h-full">
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
              width,
              height,
              backgroundImage: `url(${mainImage?.url})`,
              transformOrigin: `${(x! * 100) / w!}% ${(y! * 100) / h!}%`,
              transform: hover ? 'scale(1.5)' : 'scale(1)',
            }}
            onClick={() => dispatch({ hover: !hover })}
            onMouseLeave={() => dispatch({ hover: false })}
            onMouseMove={(e) => {
              if (hover) {
                dispatch({
                  y: e.clientY,
                  x: e.clientX,
                  h: e.screenY,
                  w: e.screenX,
                })
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
    </div>
  )
}
