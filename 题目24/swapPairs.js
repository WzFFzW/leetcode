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
var swapPairs = function(head) {
  let pre = new ListNode(0);
  const res = pre;
  pre.next = head;
  while (pre.next && pre.next.next) {
    const tmp_node = pre.next;
    pre.next = pre.next.next;
    tmp_node.next = pre.next.next
    pre.next.next = tmp_node;
    pre = pre.next.next;
  }
  return res.next;
};