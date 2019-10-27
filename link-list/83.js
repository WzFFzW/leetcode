/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const pre = new ListNode(0);
  pre.next = head;
  let left = pre;
  let right = head;
  while (right) {
    if (right.next && right.next.val === right.val) {
      while (right.next && right.next.val === right.val) {
       right = right.next;
      }
      left.next = right;
    }
    left = right;
    right = right.next;
  }
  return pre.next;
};