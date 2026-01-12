/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    for(let t=0;t<nums.length;t++){
        for(let i=0;i<nums.length;i++){
            if(nums[i] === 0){
                for(let j=i;j<nums.length-1;j++){
                    nums[j] = nums[j+1];
                }
                nums[nums.length-1] = 0;
            }
        }
    }
};
function testMoveZeroes(){
    const nums = [0,0,1];
    moveZeroes(nums);
    console.log("nums: \n", nums);
}
testMoveZeroes();