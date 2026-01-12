// 传统思路：排序之后，直接找即可
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    if(nums.length === 0){
        return 0;
    }
    // 排序
    nums.sort((a, b) => a - b);

    let count = 1;
    let lastNumber = nums[0];
    let maxLength = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - 1 === lastNumber) {
            count += 1;
        } else if (nums[i] === lastNumber) {
        } else {
            // 该序列断开,如果是最大的,就记录长度
            if (count > maxLength) {
                maxLength = count;
            }
            count = 1;
        }
        lastNumber = nums[i];
    }
    if (count > maxLength) {
        maxLength = count;
    }
    return maxLength;
};

function testLongestConsecutive() {
    const nums = [];
    console.log(longestConsecutive(nums));
}

testLongestConsecutive();