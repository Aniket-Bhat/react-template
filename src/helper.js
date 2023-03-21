export const truncateString = (str, n) => {
  if (str.length > n) {
    return str.slice(0, n - 3) + " ..."
  }
  return str
}

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const promiseMe = async function (promise) {
  try {
    const data = await promise
    return [data,null]
  } catch (e) {
    console.error(e)
    return [null, { e, success: false, msg: "Promise Failed" }]
  }
}