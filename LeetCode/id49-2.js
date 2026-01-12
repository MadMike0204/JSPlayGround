// 被人1行秒了...原理其实一样，只不过使用Map.groupBy进行了简化。
let groupAnagrams = function(strs) {
    return Array.from(Map.groupBy(strs, (s) => s.split("").sort().join("")).values())
};
// 测试函数
function testGroupAnagrams(){
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(groupAnagrams(strs));
}
testGroupAnagrams();