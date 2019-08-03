/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
    return new ListNode(0).next;
  }
  if (lists.length === 1) {
    return lists[0];
  }
  function mergeTwoList(l1, l2) {
    let head = new ListNode(0);
    const pre = head;
    while (l1 && l2) {
      if (l1.val > l2.val) {
        head.next = l2;
        l2 = l2.next;
      } else {
        head.next = l1;
        l1 = l1.next;
      }
      head = head.next;
    }
    head.next = l1 === null ? l2 : l1;
    return pre.next;
  }
  let res = mergeTwoList(lists[0], lists[1]);
  if (lists.length === 2) {
    return res;
  }
  for (let i = 2; i < lists.length; i++) {
    res = mergeTwoList(res, lists[i]);
  }
  return res;
};