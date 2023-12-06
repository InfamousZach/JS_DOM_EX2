const changeCoffee = document.getElementById('list');
const liItems = changeCoffee.children
liItems[1].innerHTML = "Fair Trade Coffee"

if (changeCoffee.hasChildNodes()){
    changeCoffee.removeChild(liItems[3])
} 

const creative = document.createElement('li');
creative.innerText = "Cheese Whiz";
document.getElementById('list').appendChild(creative); 

document.getElementById('list').innerHTML = ""

const grList = ["Protein Powder", "Muscle Milk", "Power Bars"]; 
for (let x = 0; x <grList.length; x++){
    const creative = document.createElement('li');
    creative.innerText = grList[x];
    document.getElementById('list').appendChild(creative)
} 

const change = document.getElementById('list');
const li1 = change.children
li1[1].classList.add("important") 