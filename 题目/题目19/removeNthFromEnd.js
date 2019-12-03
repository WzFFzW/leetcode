/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // function findNthNodeFromEnd(head, n) {
  //   let nth = 1;
  //   function judge(currentHead) {
  //     if (currentHead.next !== null) {
  //       const value = judge(currentHead.next);
  //       if (value) {
  //         return value;
  //       }
  //     }
  //     if (n === nth) {
  //       return currentHead;
  //     } else {
  //       nth++;
  //     }
  //   }
  //   return judge(head);
  // }
  // const node = findNthNodeFromEnd(head, n + 1);
  // if (!node) {
  //   return head.next;
  // }

  // node.next = node.next.next ? node.next.next : null;
  // return head;
  const pre = new ListNode();
  pre.next = head;
  let left = pre;
  let right = pre;
  while (n > 0) {
    right = right.next;
    n--;
  }
  while (right.next !== null) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next ? left.next.next : null;
  return pre.next;
};