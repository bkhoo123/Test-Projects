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
var reverseList = function(head) {
    if (!head) return null

    let arr = []

    let curr = head
    while (curr !== null) {
        arr.push(curr.val)
        curr = curr.next
    }

    let reverse = arr.reverse()
    
    let newList = new ListNode(reverse[0]) // [null -> ]
    let newCurr = newList

    for (let i = 1; i < arr.length; i ++) {
        newCurr.next = new ListNode(arr[i])
        newCurr = newCurr.next
    }
    return newList
};

// just get all the values in an array 
// reverse it
// create a new linked list 

// theres a fast pointer
// slow pointer
// fast points to slow
// fast = head.next.next
// slow = head.next

// 1 points at the beginning
// 2nd pointer is looping through 
// temp pointer 