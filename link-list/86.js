/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (head === null || head.next === null) {
    return head;
  }
  const preLeft = new ListNode(0);
  const preRight = new ListNode(0);
  let left = preLeft;
  let right = preRight;
  while (head) {
    if (head.val < x) {
      left.next = head;
      left = left.next;
    } else {
      right.next = head;
      right = right.next;
    }
    head = head.next;
  }
  right.next = null;
  left.next = preRight.next;
  return preLeft.next;
};