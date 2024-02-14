/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function(strs) {
    let map = new Map()

    for (let i = 0; i < strs.length; i ++) {
        let currentWord = strs[i].split("").sort().join("")
        if (map.has(currentWord)) {
            map.get(currentWord).push(strs[i]) // push word if its anagram of the key
        } else {
            map.set(currentWord, [strs[i]]) // {(sortedVersion of aet): [eat]}
        }
    }
    let values = Array.from(map.values())
    return values
};

// function anagramChecker(str, str2) {
//     // str is the key
//     // str2 is the one im checking
//     // if str and str2 is equal return true
//     // if true push str2 into the object array values
//     if (str === str2.split("").sort().join("")) return true
//     return false 
// }

// helper function to find anagrams
// use a object to keep track of the anagrams
// put the anagrams in that object
// helper anagram function on the key split sort join 
// []






   
