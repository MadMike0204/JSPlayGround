// 双指针解法2
// 迭代i指针用来遍历元素,用一个新的指针k,记录下一个非0数应该呆的地方
// 逻辑:i遍历到非0元素,就把num[i]填充到num[k],k++;i遍历到0元素,k不动,等待下一个非0元素;最后,列表里只剩下保持原有顺序的非0序列,只需填充剩下的位置为0即可
// 复杂度分析：一次遍历O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0){
            nums[k] = nums[i];
            k += 1;
        }
    }
    for(let i=k;i<nums.length;i++){
        nums[i] = 0;
    }
    return nums;
};

function testMoveZeroes() {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    console.log("nums: \n", nums);
}

testMoveZeroes();