// Update the 'Coffee' item to say 'Fair Trade Coffee'
const changeCoffee = document.getElementById('list');
const liItems = changeCoffee.children
liItems[1].innerHTML = "Fair Trade Coffee"

// Remove 'Twinkies' from the list
if (changeCoffee.hasChildNodes()){
    changeCoffee.removeChild(liItems[3])
} 

// Add an item 'Cheese Whiz'
const creative = document.createElement('li');
creative.innerText = "Cheese Whiz";
document.getElementById('list').appendChild(creative); 

// Clear the list
document.getElementById('list').innerHTML = ""

// programmatically add items from the array ['protein powder', 'muscle milk', 'power bars']
const grList = ["Protein Powder", "Muscle Milk", "Power Bars"]; 
for (let x = 0; x <grList.length; x++){
    const creative = document.createElement('li');
    creative.innerText = grList[x];
    document.getElementById('list').appendChild(creative)
} 

// Add the class 'important' to the muscle milk item
const change = document.getElementById('list');
const li1 = change.children
li1[1].classList.add("important") 