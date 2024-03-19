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
var insertGreatestCommonDivisors = function(head) {
    if (!head) return null

    let curr = head

    while (curr && curr.next) {
        let gcd = greatestCommonDivisor(curr.val, curr.next.val)
        let newNode = new ListNode(gcd, curr.next)
        curr.next = newNode
        curr = newNode.next
    }
    
    return head
    
};

function greatestCommonDivisor(int1, int2) {
    let min = Math.min(int1, int2)

    for (let i = min; i > 0; i --) {
        if (int1 % i === 0 && int2 % i === 0) return i
    }
}