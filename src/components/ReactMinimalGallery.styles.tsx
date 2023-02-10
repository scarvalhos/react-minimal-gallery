import React from 'react'

import { c } from '../utils'

interface CommonProps {
  children: React.ReactNode
  className?: string
  style?: object
}

interface ThumbnailProps extends Partial<CommonProps> {
  onClick?: (e: unknown) => unknown
  onMouseOver?: (e: unknown) => unknown
  onMouseLeave?: (e: unknown) => unknown
}

export const Container: React.FC<CommonProps> = ({
  children,
  className,
  style,
}) => (
  <div className={c('tw-space-y-1', className)} style={style}>
    {children}
  </div>
)

export const MainImageContainer: React.FC<CommonProps> = ({
  children,
  className,
  style,
}) => (
  <div
    className={c('tw-overflow-hidden tw-rounded-md', className)}
    style={style}
  >
    {children}
  </div>
)

export const ThumbnailsContainer: React.FC<CommonProps> = ({
  children,
  className,
  style,
}) => (
  <div
    className={c('tw-w-full tw-flex tw-flex-row tw-overflow-hidden', className)}
    style={style}
  >
    {children}
  </div>
)

export const ThumbnailsContent: React.FC<CommonProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={c(
      'tw-flex tw-flex-row tw-space-x-1 tw-rounded-md tw-transition-all',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export const Thumbnail: React.FC<Partial<ThumbnailProps>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={c(
      'tw-w-full tw-h-full tw-border-2 tw-border-solid tw-border-transparent tw-bg-no-repeat tw-bg-cover tw-bg-center tw-transition-all tw-ease-in tw-rounded-md tw-cursor-pointer',
      className
    )}
    {...props}
  >
    {children}
  </div>
)
