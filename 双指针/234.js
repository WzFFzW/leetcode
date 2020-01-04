/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null || head.next === null) {
    return true;
  }
  let before = head;
  let after = head;
  const stack = [];
  while (after !== null && after.next !== null) {
    stack.push(before.val);
    before = before.next;
    after = after.next.next;
  }
  if (after) {
    before = before.next;
  }
  while (before !== null) {
    if (before.val !== stack.pop()) {
      return false;
    }
    before = before.next;
  }
  return true;
};