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
var insertionSortList = function(head) {
  if (!head || head.next === null) {
    return head;
  }
  let pre = new ListNode(0);
  pre.next = head;
  while (head.next) {
    const next = head.next;
    if (next.val < head.val) {
      let _pre = pre;
      while (_pre.next.val < next.val) {
        _pre = _pre.next;
      }
      head.next = next.next;
      next.next = _pre.next;
      _pre.next = next;
    } else {
      head = head.next;
    }
  }
  return pre.next;
};