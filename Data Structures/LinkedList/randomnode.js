

class ListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}


function generateList(arr) {
  if (arr.length === 0) { return null; }
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}


const head = generateList([1, 2, 3, 4, 5]);


function returnRandomNumber(head) {
  let value = null;
  let length = 0;
  let current = head;

  while (current) {
    length++;
    if (Math.random() < 1 / length) {
      value = current.value;
    }
    current = current.next;
  }

  return value;
}

console.log(returnRandomNumber(head));


function proof(head, n) {
  const count = {};

  let current = head;
  while (current) {
    count[current.value] = 0;
    current = current.next;
  }

  while (n > 0) {
    const value = returnRandomNumber(head);
    count[value]++;
    n--;
  }

  return count;
}

console.log(proof(head, 1000000));
