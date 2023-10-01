/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    if (!head) return null;

    let current = head;
    let previous = null;
    
    while (current !== null) {
        let mCount = m;
        let nCount = n;

        // Keep m nodes.
        while (current !== null && mCount > 0) {
            previous = current;
            current = current.next;
            mCount--;
        }

        // Delete n nodes.
        while (current !== null && nCount > 0) {
            current = current.next;
            nCount--;
        }

        if (previous !== null) {
            previous.next = current;
        }
    }
    
    return head;
};
