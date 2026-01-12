// 菜鸡方案 遍历
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums,target){
    let result = [];
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                result = [i,j];
                return result;
            }
        }
    }
    return result;
}

function testTwoSum(){
    let testCase = [
        [2,7,11,15],
        [3,2,4],
        [3,3]
    ]
    let target = [9,6,6];
    console.log(twoSum(testCase[0],target[0]));
}

testTwoSum();