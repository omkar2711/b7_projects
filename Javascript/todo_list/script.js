let inputBox = document.getElementById("todoInput");
let addBtn = document.getElementById("addTodoBtn");
let todoList = document.getElementById("todoList");



//Create a new list item and add to the todoList on button click, also clear the input box
//add a button to each list item to delete the item from the list and mark the item as completed by clicking on the item
addBtn.addEventListener("click", function(){
    let todoText = inputBox.value;
    if(todoText.length === 0){
        alert("Please enter a todo item");
        return;
    }
    let newListItem = document.createElement("p");
    newListItem.innerHTML = '<input type="checkbox"> ' + todoText + ' <button class="deleteBtn">Delete</button>';
    todoList.appendChild(newListItem);
    inputBox.value = "";
});

// Add event listener to the todoList for handling item deletion and completion
todoList.addEventListener("click", function(e){
    if(e.target.classList.contains("deleteBtn")){
        // Delete the todo item
        let listItem = e.target.parentElement;
        todoList.removeChild(listItem);
    } else if(e.target.tagName === "P"){
        // Mark the todo item as completed
        e.target.classList.toggle("completed");
    }
});

// Add event listener to the checkbox to mark the item as completed
todoList.addEventListener("change", function(e){
    console.log(e);
    if(e.target.type === "checkbox" ){
        if(e.target.checked === true){
            let listItem = e.target.parentElement;
            listItem.style.textDecoration = 'line-through';
            listItem.classList.add("completed");
        }
        else{
            let listItem = e.target.parentElement;
            listItem.style.textDecoration = 'none';
            listItem.classList.remove("completed");
        }
    } 
});
