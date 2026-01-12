/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMaxHeight = 0;
    let rightMaxHeight = 0
    let result = 0;
    while (left < right) {
        // 更新最高高度
        leftMaxHeight = Math.max(height[left], leftMaxHeight);
        rightMaxHeight = Math.max(height[right], rightMaxHeight);
        // 计算当前的高度是否能用来填充雨水
        if (height[left] < height[right]) {
            result += (leftMaxHeight - height[left]);
            left++;
        } else {
            result += (rightMaxHeight - height[right]);
            right--;
        }
    }
    return result;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))