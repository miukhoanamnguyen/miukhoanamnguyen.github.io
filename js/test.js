const max = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}

const maxOfThree = (a, b, c) => {
    return max(a, max(b, c));
}

const isVowel = (ch) => {
    if ("AaOoEeUuIi".indexOf(ch) >= 0) {
        return true;
    }
    return false;
}

const sum = (arr) => arr.reduce((prev, current) => prev + current);

const multiply = (arr) => {
    return arr.reduce((prev, current) => prev * current);
}

const reverse = (str) => str.split('').reduce((pre, curr) => curr + pre, '');

const findLongestWord = (words) => {
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord.length;
}

const filterLongWords = (words, length) => words.filter(word => word.length > length);

const expect = (value, v) => {
    if (typeof v === 'object') {
        if (v.toString() === value.toString()) {
            return "TEST SUCCEEDED";
        }
    } else if (value === v) {
        return "TEST SUCCEEDED";
    }
    return "TEST FAILED";
}

console.log("Expected output of max(20,10) is 20 " + expect(20, max(20, 10)));
console.assert(20 === max(20, 10), `Expected ${20} but found ${max(20, 10)}`);
console.log("Expected output of maxOfThree(5,4,44) is 44 " + expect(44, maxOfThree(5, 4, 44)));
console.assert(44 === maxOfThree(5, 4, 44), `Expected ${44} but found ${maxOfThree(5, 4, 44)}`)
console.log("Expected output of maxOfThree(55,4,44) is 55 " + expect(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 4 " + expect(4, maxOfThree(55, 4, 44)));
console.assert(4 === maxOfThree(55, 4, 44), `Expected 4 but found ${maxOfThree(55, 4, 44)}`);
console.log("Expected output of isVowel('a') is true " + expect(true, isVowel('a')));
console.log("Expected output of isVowel('z') is false " + expect(true, isVowel('z')));
console.assert(isVowel('z'), `Expected true but found ${isVowel('z')}` );
console.log("Expected output of sum([20,10]) is 30 " + expect(30, sum([20, 10])));
console.log("Expected output of sum([20,10, 5]) is 35 " + expect(35, sum([20, 10, 5])));
console.log("Expected output of reverse('git') is tig " + expect('tig', reverse('git')));
console.log("Expected output of findLongestWord(['test', 'happy']) is 5 " + expect(5, findLongestWord(['test', 'happy'])));
console.log("Expected output of filterLongWords(['red', 'apple'], 4) is ['apple'] " + expect(['apple'], filterLongWords(['red', 'apple'], 4)));
console.log("Expected output of filterLongWords(['banana', 'apple'], 5) is ['banana'] " + expect(['banana'], filterLongWords(['banana', 'apple'], 5)));


const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log(b);
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c);
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);

