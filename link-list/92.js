/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  const pre = new ListNode(0);
  pre.next = head;
  let isChangeFinish = false;
  let left = head;
  function reverse(right, m, n) {
    if (n === 1) {
      return;
    }
    right = right.next;
    if (m > 1) {
      left = left.next;
    }
    reverse(right, m - 1, n - 1);
    if (left === right || right.next === left) {
      isChangeFinish = true;
    }
    if (isChangeFinish) {
      return; 
    }
    const tmpVal = left.val;
    left.val = right.val;
    right.val = tmpVal;
    left = left.next;
  }
  reverse(head, m, n);
  return pre.next;
};