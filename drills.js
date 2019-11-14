/*
2.2 the pivot could have been 14 or 17. Both could yield the provided output.
We know that it had to have been 14 or 17 becuase no other number is in the correct spot if it had been the pivot



14, 17, 13, 15, 19, 10, 3, 16, 9,      12
10, 17, 13, 15, 19, 14, 3, 16, 9,      12
10, 3, 13, 15, 19, 14, 17, 16, 9,      12
10, 3, 9, 15, 19, 14, 17, 16, 13,      12

10, 3, 9,   12,   15, 19, 14, 17, 16, 13

10, 3,    9

3,   9,    10 -- list after second partitioning using last item 


14,      17, 13, 15, 19, 10, 3, 16, 9, 12

14,      13, 17, 15, 19, 10, 3, 16, 9, 12

14,      13, 10, 15, 19, 17, 3, 16, 9, 12

14,      13, 10, 3, 19, 17, 15, 16, 9, 12

14,      13, 10, 3, 9, 17, 15, 16, 19, 12

14,      13, 10, 3, 9, 12, 15, 16, 19, 17


13, 10, 3, 9, 12,      14,     15, 16, 19, 17

13,      10, 3, 9, 12

10, 3, 9, 12, 13 -- list after second partitioning using first item

*/

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Q3
function qSort(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return arr;
  }

  // partition function
  let pivot = partition(arr, start, end);

  // qSort left
  arr = qSort(arr, start, pivot);

  // qSort right
  arr = qSort(arr, pivot + 1, end);

  return arr;
}

function partition(arr, start, end) {
  let pivot = arr[end - 1];
  let anchor = start;
  for (let cursor = start; cursor < end - 1; cursor++) {
    if (arr[cursor] <= pivot) {
      // swap element at anchor with element at cursor
      swap(arr, anchor, cursor);
      anchor++;
    }
  }
  swap(arr, anchor, end - 1);
  // console.log(arr);
  return anchor;
}

let dataset = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
  13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27,
  68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67,
  16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88,
  3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90,
  1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6,
  39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];
// console.log(qSort(dataset));

// Q4
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // split
  let middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  // recurse left
  left = mergeSort(left);
  // recurse right
  right = mergeSort(right);
  // merge left + right
  return merge(left, right, arr);
}

function merge(left, right, arr=[]) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] > right[rightIndex]) {
      arr[outputIndex++] = right[rightIndex++];
    }
    else {
      arr[outputIndex++] = left[leftIndex++];
    }
  }

  for(let i = leftIndex; i < left.length; i++) {
    arr[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    arr[outputIndex++] = right[i];
  }

  return arr;
}
// console.log(mergeSort(dataset));

// Q5
