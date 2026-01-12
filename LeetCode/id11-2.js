// 问题分析下来,要找的是max(2)和min(max1,max2)和对应的坐标差的乘积
// 进阶思路:双指针,缩小搜索空间
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxV = 0;
    let h = 0;
    let i=0;
    let j = height.length - 1;
    while(i<j){
        // 先算当前值
        h = Math.min(height[i],height[j])
        maxV = Math.max(maxV,h*(j-i));
        // 更新指针

        // 如果左比右大,应当移动右边(右边有可能存在更大的值,但是左边移动体积一定缩小)
        if(height[i] > height[j]){
            j--;
        }
        // 对称的
        else{
            i++
        }
    }
    return maxV;
};

function testMaxArea() {
    const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log(maxArea(nums));
}

testMaxArea();