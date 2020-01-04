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
var detectCycle = function(head) {
  while(head !== null){
    if (head.visited) {
      return head;
    }
    head.visited = 1;
    head = head.next
  }
  return null;
};