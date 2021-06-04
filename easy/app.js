// A decimal number can be represented as a sequence of bits. To illustrate:
//     6 = 00000110
//     23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:
//     bitwiseAND(6, 23) ➞ 00000110
//     bitwiseOR(6, 23) ➞ 00010111
//     bitwiseXOR(6, 23) ➞ 00010001
// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.
const bitwiseAND = (n1, n2) => n1 & n2
const bitwiseOR = (n1, n2) => n1 | n2
const bitwiseXOR = (n1, n2) => n1 ^ n2

// Write a function that returns the length of a string. Make your function recursive.
const length = (str) => str.length
const length = ({ length }) => length // recursion param

// Write a function to reverse an array.
const reverse = (arr) => arr.reverse()