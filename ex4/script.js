// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var boxes = document.getElementsByClassName("box") //puts all the boxes in one variable

var button = document.getElementById("myButton") //simplifies the name of the button

button.addEventListener("click", function() {   //listens for a click of the button, then...
    for (let i = 0; i < boxes.length; i++) {    //loops through the array of items with the classname Box
        boxes[i].style.backgroundColor = "blue" //and changes their style to "blue"
    }  
})