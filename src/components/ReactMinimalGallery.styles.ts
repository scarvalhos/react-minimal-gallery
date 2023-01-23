import tw from 'tailwind-styled-components'

interface MainImageProps {
  hover?: 'true' | 'false'
}

interface ArrowButtonProps {
  side?: 'left' | 'right'
}

export const Container = tw.div``

export const MainImageContainer = tw.div`
  tw-overflow-hidden tw-rounded-sm tw-relative
`

export const MainImage = tw.div<MainImageProps>`
  ${({ hover }) =>
    hover === 'true'
      ? 'tw-scale-[175%] tw-cursor-zoom-out'
      : 'tw-scale-100 tw-cursor-zoom-in'}

  tw-bg-cover
  tw-bg-center
  tw-h-full
  tw-w-full
  tw-rounded-sm
`

export const ArrowButton = tw.button<ArrowButtonProps>`
  ${({ side }) => (side === 'left' ? 'tw-left-2' : 'tw-right-2')}

  tw-cursor-pointer
  tw-w-8
  tw-h-8
  tw-flex
  tw-items-center
  tw-justify-center
  tw-rounded-full
  tw-border-none
  tw-bg-black
  tw-bg-opacity-20
  hover:tw-bg-opacity-50
  tw-transition-all
  tw-absolute
  tw-top-[50%]
  -tw-translate-y-[50%]
  tw-z-10
  disabled:tw-cursor-not-allowed
`

export const ThumbnailsContainer = tw.div`
  tw-w-full
  tw-flex
  tw-flex-row
  tw-overflow-hidden
`

export const ThumbnailsContent = tw.div`
  tw-flex
  tw-flex-row
  tw-space-x-1
  tw-rounded-sm
  tw-transition-all
`

export const Thumbnail = tw.div`
  tw-w-full
  tw-h-full
  tw-border-2
  tw-border-solid
  tw-border-transparent
  tw-bg-no-repeat
  tw-bg-cover
  tw-bg-center
  tw-transition-all
  tw-ease-in
  tw-rounded-sm
  tw-cursor-pointer
`
