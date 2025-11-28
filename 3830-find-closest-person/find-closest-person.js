/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let distance1 = Math.abs(x - z)
    let distance2 = Math.abs(y - z)
    
    if (distance1 === distance2) return 0
    if (distance1 < distance2) return 1
    if (distance1 > distance2) return 2
};