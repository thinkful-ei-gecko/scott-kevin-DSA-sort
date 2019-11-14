const LinkedList = require('./linkedList/LinkedList');
const LLHelp = require('./linkedList/LinkedListHelpers');

function mergeSortLL(linkedList) {
  if (LLHelp.size(linkedList) <= 1) {
    return linkedList;
  }

  let right = new LinkedList();
  right.head = LLHelp.findMiddleElement(linkedList).next;
  LLHelp.findMiddleElement(linkedList).next = null
  let left = linkedList;


  left = mergeSortLL(left);
  right = mergeSortLL(right);



  return mergeLL(left, right, linkedList)
}

function mergeLL(left, right, linkedList) {

  let currLeft = left.head;
  let currRight = right.head;
  let outputPos = 0;

  while (currLeft !== null && currRight !== null) {
    if (currLeft.value < currRight.value) {
      linkedList.insertAt(currLeft.value, outputPos++);
      currLeft = currLeft.next;
      if (currLeft) {
        linkedList.remove(LLHelp.findPrevious(left, currLeft.value).value)
      }
    } else {
      linkedList.insertAt(currRight.value, outputPos++);
      currRight = currRight.next;
      if (currRight) {
        linkedList.remove(LLHelp.findPrevious(right, currRight.value).value)
      }
    }
  }
  while (currLeft !== null) {
    linkedList.insertAt(currLeft.value, outputPos++);
    currLeft = currLeft.next;
    if (currLeft) {
      linkedList.remove(LLHelp.findPrevious(left, currLeft.value).value)
    }
  };
  while (currRight !== null) {
    linkedList.insertAt(currRight.value, outputPos++);
    currRight = currRight.next;
    if (currRight) {
      linkedList.remove(LLHelp.findPrevious(right, currRight.value).value)
    }
  };
  return linkedList;
}

let linkedList = new LinkedList();

let dataset = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
  13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27,
  68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67,
  16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88,
  3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90,
  1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6,
  39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];

dataset.forEach(item => linkedList.insertLast(item));

mergeSortLL(linkedList);

LLHelp.display(linkedList)

console.log()