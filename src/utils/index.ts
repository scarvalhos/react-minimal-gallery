export const c = (...arr: (string | undefined | null | false)[]) => {
  const classes = arr
    .flatMap((s) => (!!s ? s.split(/\s+/) : []))
    .filter((s) => !!s && s !== 'undefined')
    .join(' ')

  return classes.length < 1 ? undefined : classes
}
