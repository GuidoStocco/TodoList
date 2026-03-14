
// let nums = [2, 7, 11, 15]
// let target = 9  

// function twoSum(nums, target) {
  
//   for (let i = 0; i < nums.length; i++) {

//     for (let j = i + 1; j < nums.length; j++) {

//       if (nums[i] + nums[j] === target) {
//         console.log(nums[i], nums[j])
//         return [i, j]

//       }

//     }

//   }

// }

// console.log(twoSum(nums, target))







//2
// function isValid(s) {

//   const stack = []

//   const map = {
//     ')': '(',
//     ']': '[',
//     '}': '{'
//   }

//   for (let char of s) {

//     if (char === '(' || char === '[' || char === '{') {
//       stack.push(char)
//       console.log(stack)
//     } else {
      
//       const last = stack.pop()
//       console.log(last)

//       if (last !== map[char]) {
//         return false
//       }

//     }

//   }

  
//   return stack.length === 0

// }

// console.log(isValid('()[]{}}')) 


//3

// function removeDuplicates(nums) {

//   let i = 0

//   for (let j = 1; j < nums.length; j++) {

//     if (nums[i] !== nums[j]) {
//       i++
//       nums[i] = nums[j]
      
//     }

//   }

//   return i + 1

// }

// console.log(removeDuplicates([1, 1, 2]))



// 4

// function reverseString(s) {

//   let arr = s.split('')

//   let left = 0
//   let right = arr.length -1

//   while (left < right) {
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp

//     left++
//     right--
//   }
  
//   return arr.join('')

// }


// console.log(reverseString('hello'))


// 5

// function isAnagram(s, t) {

//   if (s.length !== t.length) {
//     return false
//   }

//   const count = {}

//   for (let char of s) {
//     count[char] = (count[char] || 0) + 1
//   }

//   for (let char of t) {

//     if (!count[char]) {
//       return false
//     }

//     count[char]--
//   }

//   return true

// }

// console.log(isAnagram('listen', 'silent'))