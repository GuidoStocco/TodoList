
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



// function maxSumSubarray(arr, k) {

    
//   let maxSum = 0
//   let windowSum = 0

//   for (let i = 0; i < k; i++) {
//     windowSum += arr[i]
//   }

//   maxSum = windowSum

//   for (let i = k; i < arr.length; i++) {

//     windowSum = windowSum - arr[i - k] + arr[i]

//     maxSum = Math.max(maxSum, windowSum)

//   }

  
//   return maxSum
// }


// console.log(maxSumSubarray([2,1,5,1,3,2]))



// function isPalindrome(s) {

//   let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')

//   let left = 0
//   let right = cleaned.length - 1

//   while (left < right) {

//     if (cleaned[left] !== cleaned[right]) {
//       return false
//     }

//     left++
//     right--

//   }

//   return true
// }

// console.log(isPalindrome("race a car"))


// function moveZeroes(nums) {

//   let insertPos = 0

//   for (let i = 0; i < nums.length; i++) {

//     if (nums[i] !== 0) {
//       nums[insertPos] = nums[i]
//       insertPos++
//     }

//   }

//   while (insertPos < nums.length) {
//     nums[insertPos] = 0
//     insertPos++
//   }

//   return nums
// }

// console.log(moveZeroes([0,0,5,2,0,7]))


// function maxProfit(prices) {

//   let minPrice = Infinity
//   let maxProfit = 0

//   for (let price of prices) {

//     if (price < minPrice) {
//       minPrice = price
//     } else {
//       let profit = price - minPrice
//       maxProfit = Math.max(maxProfit, profit)
//     }

// }

// return maxProfit
// }

// console.log(maxProfit([7,1,5,3,6,4]));