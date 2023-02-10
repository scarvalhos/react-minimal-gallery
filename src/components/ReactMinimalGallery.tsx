import * as Styles from './ReactMinimalGallery.styles'
import * as React from 'react'

import { ReactMinimalGalleryProps } from '../types'
import { randomId, strtonum } from '../utils'

import '../styles.css'

interface StateProps {
  translate?: string
  hover?: boolean
  count?: number
  x?: number
  y?: number
}

const reducer: React.Reducer<StateProps, StateProps> = (prev, next) => {
  return { ...prev, ...next }
}

const initialState: StateProps = {
  translate: '0px',
  hover: false,
  count: 0,
  x: undefined,
  y: undefined,
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
  const imgRef = React.useRef<any>(null)

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
    reducer,
    initialState
  )

  const [mainImage, setMainImage] = React.useState<{
    id: string
    url: string
  } | null>(imagesArr[count || 0])

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
    setMainImage(imagesArr[count || 0])
    dispatch({ translate: `-${(count || 0) * (tw - tw / (count || 0))}px` })
  }, [count, imagesArr, tw])

  React.useEffect(() => {
    imgRef.current?.addEventListener('mousemove', (e: any) => {
      if (hover) {
        dispatch({
          x: e.clientX - e.target.offsetLeft,
          y: e.clientY - e.target.offsetTop,
        })
      }
    })
  }, [hover])

  return (
    <Styles.Container
      className={containerClassName}
      style={{
        width,
        height:
          typeof height === 'string' ? strtonum(height) + tw : height + tw,
      }}
    >
      <Styles.MainImageContainer
        style={{
          width,
          height,
        }}
      >
        <Styles.MainImage
          ref={imgRef}
          src={mainImage?.url}
          hover={hover ? 'true' : 'false'}
          className={mainImageClassName}
          draggable={false}
          onClick={() => dispatch({ hover: !hover })}
          onMouseLeave={() => dispatch({ hover: false })}
          style={{
            transformOrigin: `${x}px ${y}px`,
            transform: hover ? 'scale(1.5)' : 'scale(1)',
          }}
        />
      </Styles.MainImageContainer>

      <Styles.ThumbnailsContainer>
        <Styles.ThumbnailsContent
          style={{
            transform: `translateX(${translate})`,
          }}
        >
          {imagesArr.map((image) => (
            <Styles.Thumbnail
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
        </Styles.ThumbnailsContent>
      </Styles.ThumbnailsContainer>
    </Styles.Container>
  )
}
