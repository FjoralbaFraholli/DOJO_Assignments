function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("gluten free", "alfredo", ["mozzarella"], ["bacon", "tomatoes", "mushrooms", "sweet corn"]);
var pizza4 = pizzaOven("cauliflower", "tomato sauce", ["mozzarella"], ["egg", "onions"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);


