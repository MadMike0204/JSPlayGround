// 字母组合从string抽象为哈希表 比较哈希表即可
/**
 * @param {Map} m1
 * @param {Map} m2
 * @return {boolean}
 */
function compareHashMap(m1,m2){
    // Map大小
    if(m1.size !== m2.size){
        console.log("表大小不一致")
        return false;
    }
    // K,V完全一致
    for(let[key,value] of m1){
        if(!m2.has(key) || !(m2.get(key) === value)){
            return false;
        }
    }
    return true;
}
/**
 * @param {string} str
 * @return {Map}
 */
function createHashMapForString(str){
    let map = new Map();
    for(let i=0; i<str.length; i++){
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1);
        }
        else{
            map.set(str[i],1);
        }
    }
    return map;
}
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const hashMap = [];
    const result = [];
    for(let i=0; i<strs.length; i++){
        // 为比较元素初始化表
        let map = createHashMapForString(strs[i]);
        console.log("当前表：",map);

        // 检查表和hashMap中的表有没有重合的 重合就加入对应的result集合
        let found = false;
        for(let j=0; j<hashMap.length; j++){
            console.log("比较以下两个表：")
            console.log("  1::", map);
            console.log("  2::",hashMap[j]);
            if(compareHashMap(map,hashMap[j])){
                result[j].push(strs[i]);
                found = true;
                break;
            }
        }
        if(!found){
            // 不存在相同的Map
            // 更新result
            const empty = [];
            empty.push(strs[i]);
            result.push(empty);
            // 更新Map
            hashMap.push(map);
            console.log("更新HashMap为：",hashMap);
        }
    }
    return result;
};
// 测试函数
function testGroupAnagrams(){
    const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
    console.log(groupAnagrams(strs));
}
testGroupAnagrams();