/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let numbers = num.toString().split("")
    let combinations = []
    let sum = 0

    for (let i = 0; i < numbers.length; i ++) {
        parseInt(numbers[i])
    }

    numbers.sort((a, b) => a -b)
    
    let number1 = [numbers[0], numbers[2]].join("")
    let number2 = [numbers[1], numbers[3]].join("")

    return Number(number1) + Number(number2)
    
};