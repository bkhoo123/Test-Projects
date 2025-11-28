/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = 'aeiou'
    let consonant = {}
    let vowelCount = {}

    for (let i = 0; i < s.length; i ++) {
        let value = s[i]

        if (vowels.includes(value)) {
            // your original ternary, FIXED
            value in vowelCount ? vowelCount[value] += 1 : vowelCount[value] = 1
        }

        if (!vowels.includes(value)) {
            // your original ternary, also correct
            value in consonant ? consonant[value] += 1 : consonant[value] = 1
        }
    }

// handle case where there are no vowels / no consonants
    let max1 = Object.values(vowelCount).length
        ? Math.max(...Object.values(vowelCount))
        : 0

    let max2 = Object.values(consonant).length
        ? Math.max(...Object.values(consonant))
        : 0

    return max1 + max2
};