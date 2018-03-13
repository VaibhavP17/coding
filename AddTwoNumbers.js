/**
https://leetcode.com/problems/add-two-numbers/description/
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const num1 = getNumbers(l1);
  console.log(num1);
  const num2 = getNumbers(l2);
  console.log(num2);
  const sum = bigAdd(num1, num2);
  console.log(sum);
  return (sum.split("")).map(i => parseInt(i)).reverse();

  function getNumbers(node) {
    let list = [];
    while (node) {
      list.push(node.val);
      node = node.next;
    }
    return list.reverse().reduce((acc, curr) => acc.concat(curr), "");
  }

  function bigAdd(a, b) {
    var answer = "";
    var carry = 0;
    var zeros = 0;
    var i = 0;
    var max = 0;

    // obtain max variable and prepend zeros to the shortest string
    if (a.length > b.length) {
      max = a.length;
      zeros = max - b.length;
      for (i = 0; i < zeros; i++) {
        b = "0" + b;
      }
    } else if (b.length > a.length) {
      max = b.length;
      zeros = max - a.length;
      for (i = 0; i < zeros; i++) {
        a = "0" + a;
      }
    } else {
      // a and b have same number of digets
      max = a.length;
    }

    // add each character starting with the last (max - 1),
    // carry the 1 if the sum has a length of 2
    for (i = max - 1; i > -1; i--) {
      var sum = String(parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry);

      if (sum.length == 2) {
        answer = sum.charAt(1) + answer;
        carry = 1;
      } else {
        carry = 0;
        answer = sum + answer;
      }
    }
    if (carry == 1) {
      answer = 1 + answer;
    }
    return answer;
  }

};
