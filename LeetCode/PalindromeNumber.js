/**
*https://leetcode.com/problems/palindrome-number/description/
*Determine whether an integer is a palindrome. Do this without extra space.
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x >= 0){
        let y = Math.abs(x)
        return y.toString().split('').reverse().join('') === Math.abs(x).toString();
    }else{
        return false;
    }
};
