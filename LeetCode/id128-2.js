// 用哈希表的版本
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 将n个元素放入哈希表中(作为key) 去重了
    let nMap = new Map();
    for (const a of nums) {
        nMap.set(a, 0);
    }
    // 初始化count
    let count = 0;
    let maxLength = 0;
    // 对每个元素,检查当前元素的value-1是否存在,如果存在,置1
    for (const key of nMap.keys()) {
        // 不是起点
        if (nMap.has(key-1)) {
            continue;
        }

        // 是起点
        count = 1;
        // 从当前元素往后数长度
        while (1) {
            // 没了
            if (!nMap.has(key + count)) {
                break;
            }
            // 还有
            count++;
        }
        // 如果长度大于已有最大值,更新最大值
        if (count > maxLength) {
            maxLength = count;
        }
    }
    return maxLength;
    // 原理梳理：如果当前元素的value-1不存在,那么就到头了;反之,可以无限往上回溯
    // 结束之后,判断当前count是否大于maxlength,并更新length
};

function testLongestConsecutive() {
    const nums = [1,2,3,4,-1];
    console.log(longestConsecutive(nums));
}

testLongestConsecutive();