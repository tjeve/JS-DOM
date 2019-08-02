//Finish the code below to make the counter increment everytime you press the button
//Also, write the listener for the decrement button so that the counter decrements when you click it
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');
var counter = document.getElementById('counter');

var count = 0; // This variable holds the current value of the counter!

incrementButton.addEventListener('click', function() {            //listens for click of incrementButton
    count = count + 1;                                           //when clicked, the count is increased by one
    counter.innerHTML = count;                                   //changes the element counter to read the new count.
    
});

decrementButton.addEventListener('click', function() {          //listens for click of decrementButton
    count = count - 1;                                          //when clicked, the count is decreased by one
    counter.innerHTML = count;                                  //changes the element counter to read the new count
})
