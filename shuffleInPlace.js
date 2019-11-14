function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffleInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    let rando = Math.floor(Math.random() * arr.length);
    swap(arr, i, rando);
  }
  return arr;
}

let booksArr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11];
// let booksArr = [4, 3, 7, 5, 9, 1]

//console.log(shuffleInPlace(arr));

function bogoBooks(arr) {
  let count = 0
  while (!isInOrder(arr)) {
    arr = shuffleInPlace(arr);
    count ++
    console.log(arr);
  }
  return count;
}

function isInOrder(arr) {
  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true
}

console.log(bogoBooks(booksArr));


function binarySort(arr, start = 0, end = arr.length) {
  let pivot = arr[end - 1];
  let anchor = start;
  for (let cursor = start; cursor < end - 1; cursor++) {
    if (arr[cursor] < pivot) {
      // swap element at anchor with element at cursor
      swap(arr, anchor, cursor);
      anchor++;
    }
  }
  return arr;
}

let bin = [0,1,1,0,1,0,1,1];

console.log(binarySort(bin));

function sort(arr) {
  let index1 = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      swap(arr, index1, i);
      index1++;
    }
  }
  return arr;
}
console.log(sort([0,1,1,0,1,0,1,1]));