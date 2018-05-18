const itemName = document.getElementById("itemName");
const itemQuantity = document.getElementById("itemQuantity");
const buttonAdd = document.getElementById('btn');

const ulShoppingList = document.getElementById('myShoppingList');
const ulDone = document.getElementById('done');


function addItem(){
    let list=[];
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.className="del-button";

    let checkbox = document.createElement("input");
    checkbox.type ='checkbox';
    checkbox.className="checkbox";

    let spanName = document.createElement("span");
    spanName.id="name";
    spanName.textContent =itemName.value;

    let spanQuantity = document.createElement("span");
    spanQuantity.id="quantity";
    spanQuantity.textContent =itemQuantity.value;

    li.appendChild(checkbox);
    li.appendChild(spanName);
    li.appendChild(spanQuantity);
    li.appendChild(deleteButton);
    

    ulShoppingList.appendChild(li);

    
}