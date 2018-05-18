
const itemName = document.getElementById("itemName");
const itemQuantity = document.getElementById("itemQuantity");
const buttonAdd = document.getElementById('btn');
const ulShoppingList = document.getElementById('myShoppingList');
const ulDone = document.getElementById('done');
const shoppingList = [
  {
    name:'Milk',
    quantity:"2 ltr",
    completed:false
  },
  {
    name:'Tomato',
    quantity:"500gms",
    completed:false
  },
  {
    name:'Potato',
    quantity:"1kg",
    completed:false
  },
  {
    name:'Carrots',
    quantity:"2kg",
    completed:false
  },
  {
    name:'Sugar',
    quantity:"1kg",
    completed:false
  }
];
//code for dafault display
for(let i=0; i<shoppingList.length;i++)
{ 
    let li = document.createElement("li");
    //delete Button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = 'x';
    deleteButton.className="del-button";
    deleteButton.addEventListener("click",deleteItem);
    //check-box 
    let checkbox = document.createElement("input");
    checkbox.type ='checkbox';
    checkbox.className="checkbox";      
    checkbox.addEventListener("click",doneList);
    //Edit button
    let editButton=document.createElement("button");
    editButton.className="fa fa-edit";
    editButton.id="edit";
    editButton.addEventListener("click",edit);

    let spanName = document.createElement("span");
    spanName.id="name";  
    spanName.textContent = shoppingList[i].name;
    let spanQuantity = document.createElement("span");    
    spanQuantity.textContent = shoppingList[i].quantity;
    for(let keys in shoppingList[i])
      {
        li.appendChild(checkbox);
        li.appendChild(spanName);
        li.appendChild(spanQuantity);
        li.appendChild(deleteButton); 
        li.appendChild(editButton);       
      }
      ulShoppingList.appendChild(li);
}
buttonAdd.addEventListener("click",addItem);
//adding item function
function addItem(e){
  let list=[];
  e.preventDefault();
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = 'x';
  deleteButton.className="del-button";
  deleteButton.addEventListener("click",deleteItem);
  let checkbox = document.createElement("input");
  checkbox.type ='checkbox';
  checkbox.className="checkbox";
  checkbox.addEventListener("click",doneList);
  let editButton=document.createElement("button");
  editButton.className="fa fa-edit";
  editButton.id="edit";
  
  // editButton.addEventListener("mouseout",toggleWhite);
  // editButton.addEventListener("mouseover",toggle);
  editButton.addEventListener("click",edit); 
  let spanName = document.createElement("span");
  spanName.id="name";
  spanName.textContent =itemName.value;
  let spanQuantity = document.createElement("span");
  spanQuantity.id="quantity";  
  spanQuantity.textContent =itemQuantity.value;
  if(itemName.value=="") 
  {
    alert("Please Enter Item Name");
    return;
  }
  if(itemQuantity.value=="")
  {
    alert("Please Enter Item Quantity");
    return;
  }
  li.appendChild(checkbox);
  li.appendChild(spanName);
  li.appendChild(spanQuantity);
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  ulShoppingList.appendChild(li); 
  itemName.value="";
  itemQuantity.value="";
  e.target.editable = true;
  document.forms[0].reset();
}
//deleting item function
function deleteItem(event)
{
  event.target.parentElement.remove() ;
} 
//Check Box Function
function doneList(event)
  {
    let doneItem=event.target.parentElement;
    event.target.parentElement.remove();
    ulDone.appendChild(doneItem);
    console.dir(ulDone.parentElement);
    let undoButton = document.createElement("button");
    undoButton.className="fa fa-undo";
    undoButton.id="undo";
    //undoList
    let checkbox = document.createElement("input");
    checkbox.type ='checkbox';
    checkbox.className="checkbox";
    checkbox.addEventListener("click",doneList);
    let editButton=document.createElement("button");
    editButton.className="fa fa-edit";
    editButton.id="edit";
    editButton.addEventListener("click",edit);
    undoButton.addEventListener("click",undoItems);
    function undoItems(event)
      {
        let undoItem=event.target.parentElement;
        event.target.parentElement.remove() ;    
        if(checkbox.checked==true){
        checkbox.checked=false;
      }    
      undoItem.removeChild(undoButton);
      undoItem.insertBefore(checkbox,undoItem.childNodes[0]);
      undoItem.appendChild(editButton);
      ulShoppingList.appendChild(undoItem);
    }
    doneItem.removeChild(doneItem.childNodes[4]);   
    doneItem.removeChild(doneItem.childNodes[0]);  
    console.log(doneItem.childNodes);       
    doneItem.insertBefore(undoButton,doneItem.childNodes[0]);
  }

  function expandableDone()
  {
    let doneList=document.getElementById('done');
    doneList.style.display==="none" ? doneList.style.display="block" : doneList.style.display="none";
  }
  function expandableList()
  {
    ulShoppingList.style.display==="none" ? ulShoppingList.style.display="block" : ulShoppingList.style.display="none";
  }
  function edit(event)
  {
    const temp = event.target.parentElement.childNodes[1];
    const temp2=event.target.parentElement.childNodes[2];
    event.target.parentElement.className="quantityEdit";
    temp.contentEditable=temp2.contentEditable="true"; 
    
    
}

function highlight(ctrl){
  var parent=ctrl.parentNode.parentNode;
  parent.style.background='red';
}
  