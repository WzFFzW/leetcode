/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let first_node = new ListNode(0);
  let is_over_ten = false;
  let current_node = first_node;
  while (l1 !== null || l2 !== null || is_over_ten) {
      let val = (l1 ? l1.val : 0 ) + (l2 ? l2.val : 0) + (is_over_ten ? 1 : 0 );
      if (val >= 10) {
          val -= 10;
          is_over_ten = true;
      } else {
          is_over_ten = false;
      }
      current_node.next = new ListNode(val);
      current_node = current_node.next;
      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
  }
  return first_node.next;
};