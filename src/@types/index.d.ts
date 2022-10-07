export interface FileRecord {
  url: string
  title: string
}

export interface GalleryProps {
  images: FileRecord[]
  containerClassName?: string
  mainImageClassName?: string
  paginationColor?: string
  hoverColor?: string
  width?: string | number
  thumbnailWidth?: string | number
}

declare module 'react-gallery-image'
