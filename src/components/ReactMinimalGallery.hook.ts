import React from 'react'

import { ReactMinimalGalleryProps } from '../types'
import { randomId, strtonum } from '../utils'

interface StateProps {
  translate?: string
  hover?: boolean
  count?: number
  x?: number
  y?: number
}

export const useReactMinimalGallery = ({
  images,
  thumbnailWidth = 100,
}: ReactMinimalGalleryProps) => {
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

  return {
    imagesArr,
    translate,
    mainImage,
    dispatch,
    hover,
    count,
    tw,
    x,
    y,
  }
}
