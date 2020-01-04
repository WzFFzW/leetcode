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
var hasCycle = function(head) {
  while(head !== null){
    if(head === head.next){
      return true;
    }
    if(head.next !== null){
      head.next = head.next.next;
    }
    head = head.next;
  }
  return false;
};