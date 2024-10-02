export default getLocalImage = (url) => {
  return new URL(`${url}`, import.meta.url).href
  }