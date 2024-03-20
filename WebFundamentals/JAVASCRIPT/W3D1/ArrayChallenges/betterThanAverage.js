function betterThanAverage(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    var avg = sum / arr.length;

    var count = 0;

    for (var j = 0; j < arr.length; j++) {
        if (arr[j] > avg) {
            count++;
        }
    }

    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 
