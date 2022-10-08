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
  export interface ReactMinimalGalleryProps {
    images: FileRecord[]
    containerClassName?: string
    mainImageClassName?: string
    paginationColor?: string
    hoverColor?: string
    width?: string | number
    thumbnailWidth?: string | number
  }
}

declare module 'react-minimal-gallery' {
  export type ReactMinimalGalleryProps = {
    images: FileRecord[]
    containerClassName?: string
    mainImageClassName?: string
    paginationColor?: string
    hoverColor?: string
    width?: string | number
    thumbnailWidth?: string | number
  }
}
