/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

// Defines elements
var addButton = document.getElementById("add-button")
var newTask = document.getElementById("description")
var runningList = document.getElementById("todo-list")
var newListElement = document.createElement("li")

addButton.addEventListener("click", function() {  //Listen for the click of the button and when it happens...
    console.dir(newListElement)         //console dir the newListElement node
    newListElement[0].value = newTask.value
    console.dir(newListElement[0])
})

// What I want to do here is take the text value of the description and insert it as a new <li></li> element and append it to
// the todo list.