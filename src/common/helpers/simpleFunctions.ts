export const setTrueForSeconds = (
  set: (arg: boolean) => void,
  seconds: number
) => {
  set(true)
  setTimeout(() => {
    set(false)
  }, seconds * 1000)
}
