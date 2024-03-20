//Push Front:
export function main(arr, value) {
    function pushFront(arr, value) {
        return [value, ...arr];
    }

    const newArray = pushFront(arr, value);

    return newArray;
}

const result1 = main([5, 7, 2, 3], 8);
console.log(result1);

const result2 = main([99], 7);
console.log(result2);



//Pop Front:
export function main(arr) {
    function popFront(arr) {
        if (arr.length === 0) {
            console.log("Array is empty");
            return undefined;
        }

        const removedValue = arr.shift();
        console.log(`${removedValue} returned, with [${arr}] printed in the function`);
        return removedValue;
    }

    const removedItem = popFront(arr);

    return removedItem;
}

const result1 = main([0, 5, 10, 15]);
const result2 = main([4, 5, 7, 9]);

console.log(result1);
console.log(result2);



//Insert At:
export function main(arr, index, value) {
    function insertAt(arr, index, value) {
        if (index < 0 || index > arr.length) {
            console.log("Index is out of bounds");
            return arr;
        }

        const newArray = [...arr.slice(0, index), value, ...arr.slice(index)];

        console.log(`[${arr}] with ${value} inserted at index ${index} => [${newArray}]`);
        return newArray;
    }

    const newArray = insertAt(arr, index, value);

    return newArray;
}

const result1 = main([100, 200, 5], 2, 311);
const result2 = main([9, 33, 7], 1, 42);

console.log(result1);
console.log(result2);


//Remove At:
export function main(arr, index) {
    function removeAt(arr, index) {
        if (index < 0 || index >= arr.length) {
            console.log("Index is out of bounds");
            return undefined;
        }

        const removedValue = arr.splice(index, 1)[0];

        console.log(`${removedValue} returned, with [${arr}] printed in the function`);
        return removedValue;
    }

    const removedItem = removeAt(arr, index);

    return removedItem;
}

const result1 = main([1000, 3, 204, 77], 1);
const result2 = main([8, 20, 55, 44, 98], 3);

console.log(result1);
console.log(result2);



//Swap Pairs:
export function main(arr) {
    function swapPairs(arr) {
        for (let i = 0; i < arr.length - 1; i += 2) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }

        return arr;
    }

    if (arr.length % 2 === 1) {
        return arr;
    }

    const swappedArray = swapPairs(arr);

    return swappedArray;
}

const result1 = main([1, 2, 3, 4]);
const result2 = main(["Brendan", true, 42]);

console.log(result1);
console.log(result2);



//Remove Duplicates:
export function main(arr) {
    function removeAt(arr, index) {
        if (index < 0 || index >= arr.length) {
            console.log("Index is out of bounds");
            return undefined;
        }

        const removedValue = arr.splice(index, 1)[0];

        console.log(`${removedValue} returned, with [${arr}] printed in the function`);
        return removedValue;
    }

    function removeDupes(arr) {
        let uniqueIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[uniqueIndex] !== arr[i]) {
                uniqueIndex++;
                arr[uniqueIndex] = arr[i];
            }
        }

        while (arr.length > uniqueIndex + 1) {
            removeAt(arr, uniqueIndex + 1);
        }

        return arr;
    }

    const deduplicatedArray = removeDupes(arr);

    return deduplicatedArray;
}

const result1 = main([-2, -2, 3.14, 5, 5, 10]);
const result2 = main([9, 19, 19, 19, 19, 19, 29]);

console.log(result1);
console.log(result2); 