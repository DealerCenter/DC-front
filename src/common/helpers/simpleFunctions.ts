export const setTrueForSeconds = (
  set: (arg: boolean) => void,
  seconds: number
) => {
  set(true)
  setTimeout(() => {
    set(false)
  }, seconds * 1000)
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  return `${('0' + date.getDate()).slice(-2)}/${('0' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
}
