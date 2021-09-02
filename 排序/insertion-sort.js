const { capitalLetters } = require('./example')

/**
 * 插入排序
 * @param {array} list 
 */
function insertionSort(list) {
  const copyList = [...list]
  const result = []

  copyList.forEach(a => {
    let i = result.length - 1

    while (i >= 0) {
      if (a >= result[i]) {
        result.splice(i + 1, 0, a)
        break
      } else {
        i--
      }
    }

    if (i < 0) {
      result.unshift(a)
    }
  })

  return result
}

// 用例
const result = insertionSort(capitalLetters)
console.log(result)
