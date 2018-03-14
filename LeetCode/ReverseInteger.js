/**
* https://leetcode.com/problems/reverse-integer/description/
* Given a 32-bit signed integer, reverse digits of an integer.
*
*/


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = 1;
    if(x < 0){
        flag = -1;
    }
    return parseInt(Math.abs(x).toString().split('').reverse().join('')) > 2147483648 ? 0 : parseInt(Math.abs(x).toString().split('').reverse().join('')) * flag;
};
