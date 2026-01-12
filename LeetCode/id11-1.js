// 问题分析下来,要找的是max(2)和min(max1,max2)和对应的坐标差的乘积
// 最基本思路,遍历所有可能存在的两对数,找出最大值
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxV = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let h = height[i] < height[j] ? height[i] : height[j];
            if (h * (j - i) > maxV){
                maxV = h * (j - i);
            }
        }
    }
    return maxV;
};

function testMaxArea() {
    const nums = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    console.log(maxArea(nums));
}

testMaxArea();