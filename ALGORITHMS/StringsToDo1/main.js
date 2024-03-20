//Remove Blanks:
export function main(inputString) {
    function removeBlanks(str) {
        return str.replace(/\s/g, '');
    }

    const result = removeBlanks(inputString);

    return result;
}

const result1 = main(" Pl ayTha tF u nkyM usi c ");
const result2 = main("I can not BELIEVE it's not BUTTER");

console.log(result1);
console.log(result2);



//Get Digits:
export function main(inputString) {
    function getDigits(str) {
        let result = '';

        for (let char of str) {
            if (!isNaN(Number(char))) {
                result += char;
            }
        }

        return Number(result);
    }

    const result = getDigits(inputString);

    return result;
}

const result1 = main("abc8c0d1ngd0j0!8");
const result2 = main("0s1a3y5w7h9a2t4?6!8?0");

console.log(result1);
console.log(result2);



//Acronyms:
export function main(inputString) {
    function acronym(str) {
        const words = str.split(' ');

        const acronymArray = words.map(word => word.charAt(0).toUpperCase());

        return acronymArray.join('');
    }

    const result = acronym(inputString);

    return result;
}

const result1 = main("there's no free lunch - gotta pay yer way.");
const result2 = main("Live from New York, it's Saturday Night!");

console.log(result1);
console.log(result2);



//Count Non-Spaces:
export function main(inputString) {
    function countNonSpaces(str) {
        const stringWithoutSpaces = str.replace(/\s/g, '');

        return stringWithoutSpaces.length;
    }

    const result = countNonSpaces(inputString);

    return result;
}

const result1 = main("Honey pie, you are driving me crazy");
const result2 = main("Hello world !");

console.log(result1);
console.log(result2);



//Remove Shorter Strings:
export function main(arr, minLength) {
    function removeShorterStrings(strings, length) {
        if (!Array.isArray(strings)) {
            console.log("Input is not an array");
            return [];
        }

        return strings.filter(str => str.length >= length);
    }

    const result = removeShorterStrings(arr, minLength);

    return result;
}

const result1 = main(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
const result2 = main(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);

console.log(result1);
console.log(result2);

