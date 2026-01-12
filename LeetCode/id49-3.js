let groupAnagrams = function(strs) {
    const map = new Map();
    for(let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let collection = map.get(key) ? map.get(key) : [];
        collection.push(str);
        map.set(key,collection);
    }
    return Array.from(map.values());
};
// 测试函数
function testGroupAnagrams(){
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(groupAnagrams(strs));
}
testGroupAnagrams();