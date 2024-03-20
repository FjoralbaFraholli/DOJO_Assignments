var arr = [0,5,10,15];

for (i = 0; i<arr.length; i++){
    arr[i] = arr[i+1];
}

arr.length = arr.length-1;
// arr.pop();
console.log(arr);