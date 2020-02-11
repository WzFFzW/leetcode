/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headB || !headA) {
    return null;
  }
  let _headA = headA;
  let _headB = headB;
  while (_headA.next && _headB.next) {
    _headA = _headA.next;
    _headB = _headB.next;
  }
  let count = 0;
  let isALarge = true;
  if (_headA.next) {
    while (_headA.next) {
      count++;
      _headA = _headA.next;
    }
  } else if (_headB.next) {
    isALarge = false;
    while (_headB.next) {
      count++;
      _headB = _headB.next;
    }
  }
  _headA = headA;
  _headB = headB;
  while (count > 0) {
    if (isALarge) {
      _headA = _headA.next;
    } else {
      _headB = _headB.next;
    }
    count--;
  }
  while (_headA && _headB) {
    if (_headB == _headA) {
      return _headA;
    }
    _headA = _headA.next;
    _headB = _headB.next;
  }
  return null;
};