/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = 'aeiouAEIOU'

    let split = s.split("")
    let obj = {}
    

    for (let i = 0; i < vowels.length; i ++) {
        obj[vowels[i]] = vowels[i].charCodeAt(0)
    }
    
    let filter = split.filter(ele => {
        return vowels.includes(ele)
    })
    
    filter.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

    let filterIndex = 0
    
    for (let i = 0; i < split.length; i ++) {
        if (vowels.includes(split[i])) {
            split[i] = filter[filterIndex]
            filterIndex ++
        }
    }
    return split.join("")
};

// {
//   a: 97,
//   e: 101,
//   i: 105,
//   o: 111,
//   u: 117,
//   A: 65,
//   E: 69,
//   I: 73,
//   O: 79,
//   U: 85
// }
