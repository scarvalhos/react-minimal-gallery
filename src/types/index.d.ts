export interface FileRecord {
  url: string
  title: string
}

export type ReactMinimalGalleryProps = {
  images: FileRecord[]
  containerClassName?: string
  mainImageClassName?: string
  paginationColor?: string
  hoverColor?: string
  width?: string | number
  thumbnailWidth?: string | number
}

declare namespace ReactMinimalGallery {
  export const images: FileRecord[]

  export const containerClassName: string | undefined

  export const mainImageClassName: string | undefined

  export const paginationColor: string | undefined

  export const hoverColor: string | undefined

  export const width: string | number | undefined

  export const thumbnailWidth: string | number | undefined
}

declare module 'react-minimal-gallery' {
  type ReactMinimalGalleryTypes = {
    images: FileRecord[]
    containerClassName?: string
    mainImageClassName?: string
    paginationColor?: string
    hoverColor?: string
    width?: string | number
    thumbnailWidth?: string | number
  }

  export type ReactMinimalGalleryProps = ReactMinimalGalleryTypes
}
