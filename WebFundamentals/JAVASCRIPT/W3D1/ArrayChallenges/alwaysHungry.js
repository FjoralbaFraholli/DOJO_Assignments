function alwaysHungry(arr) {

    var findFood = false;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            findFood = true;
        }
    }

    if (!findFood) {
        console.log("I'm hungry");
    }
}
