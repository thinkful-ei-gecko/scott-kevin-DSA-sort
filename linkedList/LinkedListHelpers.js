const listHelpers = {
  display(linkedList) {
    let currNode = linkedList.head;
    let currPos = 1;
    while (currNode) {
      console.log('pos: ' + currPos);
      console.log('value: ' + currNode.value);
      console.log('next: ' + (currNode.next !== null ? currNode.next.value : null));
      currNode = currNode.next;
      currPos += 1;
    }
  },
  size(linkedList) {
    if (!linkedList.head) {
      return 'no values in list'
    }
    let currNode = linkedList.head.next;
    let currPos = 1;
    while(currNode) {
      currNode = currNode.next;
      currPos += 1;
    }

    return currPos;
  },
  isEmpty(linkedList) {
    return !linkedList.head;
  },
  findPrevious(linkedList, item) {
    let prevNode = linkedList.head;
    let currNode = linkedList.head;
    if (!linkedList.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    return prevNode
  },
  findLast(linkedList) {
    let currNode = linkedList.head;
    if (!linkedList.head) {
      return currNode;
    }
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  },
  removeDuplicates(linkedList) {
    let current = linkedList.head;
    while (current) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
  },
  reverseLinkedList(linkedList) {
    let currNode = linkedList.head;
    let prevNode = null;
    let nextNode = currNode.next;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
      if (nextNode === null) {
        linkedList.head = prevNode;
      }
    }
  },
  // reverseRecursively(linkedList, currNode = null, nextNode = null, prevNode = null) {
  //   let currNode = linkedList.head;
  //   let nextNode = currNode.next;
  //   if (nextNode === null) {
  //     linkedList.head = prevNode;
  //   }

  //   this.reverseRecursively(linkedList, currNode, nextNode, prevNode)
  // }
  thirdFromEnd(linkedList) {
    let currNode = linkedList.head;
    while (currNode) {
      currNode = currNode.next;
      if (currNode.next.next.next === null) {
        return currNode;
      }
    }
  },
  findMiddleElement(linkedList) {
    let size = this.size(linkedList);
    let middle = Math.floor(size/2);
    let currPos = 1;
    let currNode = linkedList.head;
    while (currPos < middle) {
      currNode = currNode.next;
      currPos +=1;
    }
    return currNode;
  },

  detectCycle(linkedList) {
    let slow = linkedList.head;
    let fast = linkedList.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }
    return false;
  },
}

module.exports = listHelpers;