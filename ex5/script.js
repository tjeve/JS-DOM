// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

// You don't need to name "box" because you don't want to use any of the boxes already present. You want to create your own.
var button = document.getElementById("myButton")    //simplifies button
var boxContainer = document.getElementById("boxContainer") //simplifies boxContainer


button.addEventListener("click", function() {
    var newBox = document.createElement("div")  //Creates a new div <-- be sure to put in the actual tag here.
    console.dir(newBox) //consol.dir it to change the properteis of this element. 
    newBox.className = "box"
    boxContainer.appendChild(newBox)
})


