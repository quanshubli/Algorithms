const { capitalLetters } = require('./example')

/**
 * 插入排序
 * @param {array} list 
 */
function insertionSort(list) {
  const copyList = [...list]
  const result = []

  copyList.forEach(a => {
    const index = result.findIndex(b => a <= b)

    if (index !== -1) {
      result.splice(index, 0, a)
    } else {
      result.push(a)
    }
  })

  return result
}

// 用例
const result = insertionSort(capitalLetters)
console.log(result)
