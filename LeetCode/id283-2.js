// 双指针解法
// 初始状态：a置1，b置0
// a行为：a指针持续右移，遇到非0数时要检查b指针的值是否为0，是则ab交换
// b行为：b指针也持续右移，遇到0时要保持不动，直到ab交换或循环结束
// 行为分析：ab指针的交换不会影响原先顺序，因为ab符合交换条件时，ab的距离保持最近，不会出现中间有其他的非0的数的情况
// 复杂度分析：一次遍历O(n)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let b = 0;
    for (let a = 1; a < nums.length; a++) {
        let bMove = false;
        if(nums[b] !== 0){ // 不为0，往前挪
            bMove = true;
        }
        if(nums[a] && !bMove){ // b为0，a不为0，需要交换
            nums[b] = nums[a];
            nums[a] = 0;
            b++;
            continue;
        }
        if(bMove){

            b++;
        }
    }
};

function testMoveZeroes() {
    const nums =[0,1,0,3,12];
    moveZeroes(nums);
    console.log("nums: \n", nums);
}

testMoveZeroes();