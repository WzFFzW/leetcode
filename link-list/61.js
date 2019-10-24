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
var rotateRight = function(head, k) {
  if (k === 0 || head === null) {
    return head;
  }
  let i = 1;
  const _head = head;
  while (head.next) {
    head = head.next;
    i++;
  }
  head.next = _head;
  const step = i - k % i;
  let j = 0;
  while (j < step) {
    head = head.next;
    j++;
  }
  const res = head.next;
  head.next = null;
  return res;
};