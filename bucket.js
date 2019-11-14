function bucketSort(arr, max, min, bigBucket = [], smallBucket = []) {
  if (arr.length === 2) {
    return [min, max];
  } else if (arr.length <= 1) {
    return arr;
  } else if (arr.length >= 3 && min === max) {
    return arr;
  }

  let middle = (max + min) /2 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > middle) {
      bigBucket.push(arr[i]);
    } else {
      smallBucket.push(arr[i]);
    }
  }
  let bigMax = Math.max(...bigBucket); 
  let bigMin = Math.min(...bigBucket); 
  let smallMax = Math.max(...smallBucket); 
  let smallMin = Math.min(...smallBucket); 

  smallBucket = bucketSort(smallBucket, smallMax, smallMin);
  bigBucket = bucketSort(bigBucket, bigMax, bigMin);


  return [...smallBucket, ...bigBucket]
}


let arr = [3, 9, 4, 2, 1, 11, 7, 3, 12, 15, 14, 88, 33, 999, 22, 99, 23, 99, 100, 99]

let brick = [3, 3, 3]

let dataset = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
  13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27,
  68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67,
  16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88,
  3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90,
  1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6,
  39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];



console.log(bucketSort(dataset, 1, 98))