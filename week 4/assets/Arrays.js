const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Array elements:", fruits);
console.log("Length of array:", fruits.length);
console.log("Index of Apple in the list:", fruits.indexOf("Apple"));
console.log("Sorted array:", fruits.sort());
console.log("Reverse array:", fruits.reverse());

const pushPopArray = fruits;
pushPopArray.push("Kiwi");
console.log("Pushing and popping:", pushPopArray);
pushPopArray.pop();
console.log("Pushing and popping after pop:", pushPopArray);

const sliceArray = fruits;
console.log("Slicing the array from index 1 to 3:", sliceArray.slice(1, 3));

const concatArray = fruits;
const newArray = ["Kiwi", "Papaya", "Dragon fruit", "Watermelon"];
console.log("New array to be concatenated:", newArray);
console.log("New array after concatenation:", concatArray.concat(newArray));