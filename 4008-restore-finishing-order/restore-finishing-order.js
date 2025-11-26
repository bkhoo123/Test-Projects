/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let res = []

    for (let i = 0; i < order.length; i ++) {
        let value = order[i]
        let checker = checkFriends(value, friends)
        if (checker) res.push(value)
    }
    return res
};

const checkFriends = (value, arr) => {
    if (arr.includes(value)) {
        return true
    } else {
        return false
    }
}