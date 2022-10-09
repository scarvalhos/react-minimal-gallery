export const c = (...arr: (string | undefined | null | false)[]) => {
  const classes = arr
    .flatMap((s) => (!!s ? s.split(/\s+/) : []))
    .filter((s) => !!s && s !== 'undefined')
    .join(' ')

  return classes.length < 1 ? undefined : classes
}

export const strtonum = (s?: string | null): number => {
  if (!s) return 0
  return +s.replace(/[^\d,-]/g, '').replace(',', '.') || 0
}

export const randomId = () => {
  return Math.floor(Date.now() * Math.random()).toString(36)
}
