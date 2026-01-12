// 错误的编写思路，Set没法表明含有的字符数一致，只能表示含有xx字符
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let patterns = Array.from({length: strs.length}, () => new Set());
    const patternToStrings = new Map();

    // 创建set数组
    for (let i = 0; i < strs.length; i++) {
        const set = new Set();
        // 计算当前字符串的set
        for (let j = 0; j < strs[i].length; j++) {
            set.add(strs[i][j]);
        }
        // set加入set数组(需判断是否重复)
        for (let j = 0; j <= i; j++) {
            if (isSetEqual(set,patterns[j])) {
                break;
            }
            patterns[i] = set;
        }
    }
    patterns = patterns.filter(set => set.size >0);
    console.log("patterns:", patterns);
    console.log("pTS:", patternToStrings);

    // 利用set数组创建Map
    for (let i = 0; i < patterns.length; i++) {
        patternToStrings.set(patterns[i], []);
    }
    // 更新String
    for (let i = 0; i < strs.length; i++) {
        const set = new Set();
        // 计算当前字符串的set
        for (let j = 0; j < strs[i].length; j++) {
            set.add(strs[i][j]);
        }
        console.log("set:",set)
        if (patternToStrings.has(set)) {
            console.log("has");
            patternToStrings.get(set).push(strs[i]);
        }
    }
};
/**
 * @param {Set} a
 * @param {Set} b
 * @return {boolean}
 */
function isSetEqual(a, b) {
    if(a.size !== b.size){
        return false;
    }
    for(const x of a){
        if(!b.has(x)){
            return false;
        }
    }
    return true;
}

function testGroupAnagrams() {
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(groupAnagrams(strs));
}

testGroupAnagrams();