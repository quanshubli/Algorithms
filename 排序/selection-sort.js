const { capitalLetters } = require('./example')

/**
 * 选择排序
 * @param {array} list 
 */
function selectionSort(list) {
  const result = []
  const copyList = [...list]
  let index
  let length = copyList.length

  while (length > 0) {
    index = 0

    for (let i = 0; i < length; i++) {
      if (copyList[i] < copyList[index]) {
        index = i
      }
    }

    result.push(copyList.splice(index, 1)[0])
    length--
  }

  return result
}

// 用例
// const result = selectionSort(capitalLetters)
// console.log(result)
