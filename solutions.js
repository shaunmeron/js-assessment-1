// Your solutions will go here :)
//1.
const lowerCase = (input) => {
    return input.toLowerCase();
};

//2.
const isAllLowerCase = (str) => str === str.toLowerCase();

//3.
const isAllUpperCase = (str) => str === str.toUpperCase();

//4.
const isNotPalindrome = (str) => {
    const lowerCaseStr = str.toLowerCase();
    if (lowerCaseStr.length === 1 || lowerCaseStr == "") return false;

    if (lowerCaseStr[0] == lowerCaseStr.slice(-1)) {
        return isNotPalindrome(lowerCaseStr.slice(1, -1));
    }
    return true;
};

//5.
const multiplyBy2 = (input) => (typeof (input * 1) == "number" ? input * 2 : false);

//6.
const convertHourToSec = (hours) => {
    return typeof (hours * 1) == "number" ? hours * 60 * 60 : false;
};

//7.
const getLowestNumber = (a, b, c) => (typeof ((a, b, c) * 1) ? Math.min(a, b, c) : false);

//8.
const addStringLengths = (a, b) => {
    return typeof (a, b) == "string" ? a.length + b.length : false;
};

//9.
const subtract = (a, b) => {
    return typeof ((a, b) * 1) ? a - b : false;
};

//10.
const calculateChange = (totalPaid, totalCost) => {
    return typeof ((totalPaid, totalCost) * 1) == "number" ? "$" + (totalPaid - totalCost).toFixed(2) : false;
};
