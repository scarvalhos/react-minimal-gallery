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
  var images: FileRecord[]

  var containerClassName: string | undefined

  var mainImageClassName: string | undefined

  var paginationColor: string | undefined

  var hoverColor: string | undefined

  var width: string | number | undefined

  var thumbnailWidth: string | number | undefined
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
