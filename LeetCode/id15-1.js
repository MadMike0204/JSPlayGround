/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 基本量
    let zeroIndex = -1;
    let minPositiveIntegerIndex = -1;
    let maxNegativeIntegerIndex = -1;
    const result = []

    // 排序
    nums = nums.sort((a, b) => b - a);

    // 找0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroIndex = i;
            break;
        }
    }
    // 是否有缺失的正负元素
    if (zeroIndex > 0) {
        minPositiveIntegerIndex = zeroIndex - 1;
    }
    if (zeroIndex < nums.length - 1) {
        maxNegativeIntegerIndex = zeroIndex + 1;
        for (let i = zeroIndex + 1; i < nums.length; i++) {
            if (nums[i] < 0) {
                maxNegativeIntegerIndex = i;
                break;
            }
        }
    }

    // 分类1：000
    if (zeroIndex >= 0) {
        let zeroCount = 0;
        for (let i = zeroIndex; i < nums.length; i++) {
            if (nums[i] !== 0 || zeroCount === 3) {
                break;
            }
            zeroCount++;
        }
        if (zeroCount >= 3) {
            result.push([0, 0, 0]);
        }
    }

    if (minPositiveIntegerIndex < 0 || maxNegativeIntegerIndex < 0) {
        return result;
    }

    // 正负整数都存在 开始搜索
    let b, c;// 指针
    // 分类2：正正负
    b = minPositiveIntegerIndex;
    c = maxNegativeIntegerIndex;
    for (let i = 0; i < b; i++) {
        // 去重
        if (i !== 0) {
            if (nums[i - 1] === nums[i]) {
                continue;
            }
        }
        // 剪枝:最大的a大于负数绝对值的最大值
        if (nums[i] >= Math.abs(nums[nums.length - 1])) {
            continue;
        }
        for (let j = b; j > i; j--) {
            // 去重
            if (j !== b) {
                if (nums[j] === nums[j + 1]) {
                    continue;
                }
            }
            // 剪枝:a+b大于c负数绝对值的最大值
            if (nums[i] + nums[j] > Math.abs(nums[nums.length - 1])) {
                break;
            }
            for (let k = c; k < nums.length; k++) {
                // 判断结果 因为a+b只能对一个c,所以要break
                // 查到1个就break,是否去重对结果没有影响
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    break;
                }
            }
        }
    }

    // 分类3：正负负,和正正负是对称情况,我们反过来写
    b = minPositiveIntegerIndex;
    c = maxNegativeIntegerIndex;
    for (let k = nums.length - 1; k > c; k--) {
        // 去重
        if (k !== nums.length - 1) {
            if (nums[k] === nums[k + 1]) {
                continue;
            }
        }
        // 剪枝:c绝对值大于等于最大的a
        if (Math.abs(nums[k]) >= nums[0]) {
            continue;
        }
        for (let j = c; j < nums.length; j++) {
            // 去重
            if (k !== c) {
                if (nums[j] === nums[j - 1]) {
                    continue;
                }
            }
            // 剪枝:b+c的绝对值大于最大的a,换小的c
            if (Math.abs(nums[j] + nums[k]) > nums[0]) {
                break;
            }
            for (let i = b; i >= 0; i--) {
                // 判断结果 因为b+c只能对一个a,所以要break
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    break;
                }
            }
        }
    }
    // 分类4：正0负
    b = minPositiveIntegerIndex;
    c = maxNegativeIntegerIndex;
    if (zeroIndex >= 0) {
        for (let i = 0; i <= b; i++) {
            // 剪枝:最大的a大于负数绝对值的最大值
            if (nums[i] > Math.abs(nums[nums.length - 1])) {
                continue;
            }
            let j = zeroIndex;
            for (let k = c; k < nums.length; k++) {
                // 判断结果,一个A对应一个B,要break
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    break;
                }
            }
        }
    }
    return result;
};

console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0, -12, 8, 3, 0, -1, -9, -1, -10, 9]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));