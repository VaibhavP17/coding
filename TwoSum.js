/**
https://leetcode.com/problems/two-sum/description/
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myMap = {};
    for(let i=0; i<nums.length; i++){
        let complement = target - nums[i];
        complement = complement + "";
        const keys = Object.keys(myMap);
        if(keys.includes(complement)) {
            return [myMap[complement], i];
        }else{
            myMap[nums[i]] = i;
        }
    }
    return [-1];
};
