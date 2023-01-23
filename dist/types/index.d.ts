export type ReactMinimalGalleryProps = {
  images: string[]
  containerClassName?: string
  mainImageClassName?: string
  paginationColor?: string
  hoverColor?: string
  width?: string | number
  height?: string | number
  thumbnailWidth?: string | number
}

declare namespace ReactMinimalGallery {
  export const images: string[]

  export const containerClassName: string | undefined

  export const mainImageClassName: string | undefined

  export const hoverColor: string | undefined

  export const width: string | number | undefined

  export const height: string | number | undefined

  export const thumbnailWidth: string | number | undefined
}

declare module 'react-minimal-gallery' {
  type ReactMinimalGalleryTypes = {
    images: string[]
    containerClassName?: string
    mainImageClassName?: string
    paginationColor?: string
    hoverColor?: string
    width?: string | number
    height?: string | number
    thumbnailWidth?: string | number
  }

  export type ReactMinimalGalleryProps = ReactMinimalGalleryTypes
}
