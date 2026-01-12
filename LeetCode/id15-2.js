/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    // 升序数组
    nums.sort((a, b) => a - b);
    const n = nums.length;

    // 用i作为定海神针,确定1个a
    for (let i = 0; i < n - 2; i++) {
        const a = nums[i];
        // a > 0,之后选的abc都>0,不可能满足题意
        if (a > 0) {
            break;
        }
        // 去重,同一个a只做一次运算
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 我们在区间(i+1,n-1)中组合,找 b + c = -a
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const b = nums[left];
            const c = nums[right];
            const sum = a + b + c;
            if (sum === 0) {
                result.push([a, b, c]);
                // 去重:如果左指针往右走的部分值一样,就跳过
                while (left < right && nums[left] === b) left++;
                // 同理,跳过右指针的重复部分
                while (left < right && nums[right] === a) right--;
            } else if (sum < 0) {
                // sum小了,需要更大,left右移
                left++;
            } else {
                // sum大了,需要更小,right左移
                right--;
            }
        }
    }
    return result;
};

console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0, -12, 8, 3, 0, -1, -9, -1, -10, 9]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));