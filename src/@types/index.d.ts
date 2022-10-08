export interface FileRecord {
  url: string
  title: string
}
export type ReactSimpleGalleryProps = {
  images: FileRecord[]
  containerClassName?: string
  mainImageClassName?: string
  paginationColor?: string
  hoverColor?: string
  width?: string | number
  thumbnailWidth?: string | number
}

declare namespace ReactSimpleGallery {
  export interface ReactSimpleGalleryProps {
    images: FileRecord[]
    containerClassName?: string
    mainImageClassName?: string
    paginationColor?: string
    hoverColor?: string
    width?: string | number
    thumbnailWidth?: string | number
  }
}

declare module 'react-simple-gallery' {
  export type ReactSimpleGalleryProps = {
    images: FileRecord[]
    containerClassName?: string
    mainImageClassName?: string
    paginationColor?: string
    hoverColor?: string
    width?: string | number
    thumbnailWidth?: string | number
  }
}
