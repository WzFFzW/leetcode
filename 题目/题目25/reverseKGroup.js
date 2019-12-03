/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const dummy = new ListNode(0);
  let start = dummy;
  while (head) {
    let count = 0;
    const stack = [];
    while (count !== k && head) {
      stack.push(head);
      head = head.next;
      count++;
    }
    if (count !== k) {
      break;
    }
    while (stack.length !== 0) {
      const node = stack.pop();
      start.next = node;
      start = start.next;
    }
  }
  return dummy.next;
};