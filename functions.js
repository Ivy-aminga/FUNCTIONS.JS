// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.

let items = ["oranges","mangoes","tomatoes","onions","potatoes","bananas","cabbages","passion","pears","apples"];
console.log(items);
// Create a separate array with the corresponding stock quantities of each item maximum of 10.

let quantity = [30,20,40,70,60,50,45,30,80,10];
console.log(quantity);

// Write a function to add a new item to the inventory, updating both arrays.

function itemAdd(groceryName, stockQuantity){
  items.push(groceryName);
  quantity.push(stockQuantity);
  }
  itemAdd("Berries", 100);
  console.log(items);
  console.log(quantity);

// Write a function to update the stock quantity of an existing item.

function updateQuantity(groceryName,stockQuantity) {
  let index = items.indexOf(groceryName);
  if (index !== -1) {
    quantity[index] = stockQuantity;
    console.log(items);
    console.log(quantity);
    console.log(`grocery quantity of ${groceryName} updated to ${stockQuantity}`);
  } else {
    console.log(`no update`);
  }
}
(updateQuantity('bananas',100));


// Write a function to calculate the total number of items in the inventory.

function getTotal() {
  let total = 0;
  for (let stockQuantity of quantity) {
    total += stockQuantity;
  }
  return total;
}
console.log(getTotal());

// Write a function to find the item with the lowest stock quantity.

function lowestItem() {
  let lowest = 0;
  let lowest2 = ``;
  for (let i = 0; i < items.length; i++) {
    if (quantity[i] < lowest) {
      lowest = quantity[i];
      lowest2 = items[i];
    }
  }
  return lowest2;
}
console.log(lowestItem());




















      



