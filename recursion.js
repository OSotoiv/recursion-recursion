/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  const num = nums.pop();
  return num * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) {
    return 0;
  }
  const word = words.pop();
  const currentLength = word.length;
  const remainingLength = longest(words);
  return Math.max(currentLength, remainingLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str;
  }
  const newStr = everyOther(str.slice(2));
  return str[0] + newStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    const subStr = str.slice(1, str.length - 1);
    return isPalindrome(subStr);
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === val) {
    return index;
  }
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === "") {
    return "";
  }
  const lastChar = str[str.length - 1];
  const remainingStr = str.slice(0, str.length - 1);
  return lastChar + revString(remainingStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    }
    if (typeof obj[key] === "object") {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, low, mid - 1);
  }
  return binarySearch(arr, val, mid + 1, high);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
