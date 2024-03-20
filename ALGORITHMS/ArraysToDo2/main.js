//Reverse:
export function main(arr) {
    function reverseArrayInPlace(array) {
        var start = 0;
        var end = array.length - 1;

        while (start < end) {
            const temp = array[start];
            array[start] = array[end];
            array[end] = temp;

            start++;
            end--;
        }
    }

    reverseArrayInPlace(arr);

    return arr;
}

const result1 = main([1, 2, 3, 4, 5]);
const result2 = main(['apple', 'orange', 'banana', 'grape']);

console.log(result1);
console.log(result2);



//Rotate:
export function main(arr, shiftBy) {
    function reverseArray(start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }

    function rotateArr(array, shiftBy) {
        const length = array.length;

        shiftBy = (shiftBy % length + length) % length;

        reverseArray(0, length - 1);

        reverseArray(0, shiftBy - 1);

        reverseArray(shiftBy, length - 1);
    }

    rotateArr(arr, shiftBy);

    return arr;
}

const result1 = main([1, 2, 3], 1);
const result2 = main([1, 2, 3, 4, 5], -2);

console.log(result1);
console.log(result2);



//Filter Range:
export function main(arr, min, max) {
    function filterRangeInPlace(array, minValue, maxValue) {
        var index = 0;

        for (var i = 0; i < array.length; i++) {
            if (array[i] >= minValue && array[i] <= maxValue) {
                array[index] = array[i];
                index++;
            }
        }

        array.length = index;
    }

    filterRangeInPlace(arr, min, max);

    return arr;
}

const result1 = main([5, 10, 15, 20, 25], 10, 20);
const result2 = main([2, 8, 15, 25, 30], 10, 25);

console.log(result1);
console.log(result2);



//Concat:
export function main(arr1, arr2) {
    function arrConcat(array1, array2) {
        const resultArray = [];

        for (var i = 0; i < array1.length; i++) {
            resultArray.push(array1[i]);
        }

        for (var i = 0; i < array2.length; i++) {
            resultArray.push(array2[i]);
        }

        return resultArray;
    }

    const result = arrConcat(arr1, arr2);

    return result;
}

const resultArray = main(['a', 'b'], [1, 2]);

console.log(resultArray);
