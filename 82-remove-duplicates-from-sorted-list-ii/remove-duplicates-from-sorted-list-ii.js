/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null;
    let hashtable = {};

    let curr = head;
    while (curr !== null) {
        if (hashtable[curr.val]) {
            hashtable[curr.val] += 1;
        } else {
            hashtable[curr.val] = 1;
        }
        curr = curr.next;
    }

    let dummyHead = new ListNode(0);
    let newList = dummyHead;

    curr = head;
    while (curr !== null) {
        if (hashtable[curr.val] === 1) {
            newList.next = new ListNode(curr.val);
            newList = newList.next;
        }
        curr = curr.next;
    }

    return dummyHead.next;
};
