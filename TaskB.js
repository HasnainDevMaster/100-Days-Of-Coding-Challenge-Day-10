"use strict";
// 100 Days Of Coding Challenge!
/** Question 29:
 Favorite Fruit: Make an array of your favorite fruits,
 then write a series of independent if statements that check for certain fruits in your array.

* Make an array of your three favorite fruits and call it favorite_fruits.
* Write five if statements. Each should check whether a certain kind of fruit is in your array.
* If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
//---------------------------------------------------------------------------------
// An array called favorite_fruits containing my favorite fruits:
let favorite_fruits = ["apple", "banana", "mango"];
// Check if specific fruits are in the array:
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!"); // If banana is in the array
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!"); // If apple is in the array
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!"); // If mango is in the array
}
if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!"); // If grape is in the array
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges"); // If orange is in the array
}
// If the fruit is not in the array, it will not print anything.
