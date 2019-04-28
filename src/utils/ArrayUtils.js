export const arrayToMapWithKey = (array, key) =>
  array.reduce((obj, item) => {
    const newKey = item[key]
    obj[newKey] = item
    return obj
  }, {})