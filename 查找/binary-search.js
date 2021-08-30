/**
 * 二分查找
 * @param {number} num 整数
 * @param {array} list 有序的整数数列
 */
 function binarySearch(num, list) {
  let left = 0
  let right = list.length - 1
  let mid

  while (right >= left) {
    mid = Math.floor((left + right) / 2)

    if (list[mid] > num) {
      right = mid - 1
    } else if (list[mid] < num) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

// 用例
// const list = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98]
// const num = 23
// const result = binarySearch(num, list)
// console.log(result)
