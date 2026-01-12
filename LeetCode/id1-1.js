// 比较优秀的方案，使用HashMap先查后增
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums,target){
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const current = nums[i];
        const complement = target - nums[i];

        if(map.has(complement)){
            return [map.get(complement),i];
        }
        map.set(current,i);
    }
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