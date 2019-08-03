// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var accordion = document.getElementById("accordion")            // sets names for accordion
var sectionHeader = document.getElementById("section-header")   // sets name for sectionHeader
var section = document.getElementById("section")                // sets name for section

console.log(sectionHeader)

sectionHeader.addEventListener("click", function() {
    console.dir(accordion)                                          //console dir to search properties of accordion. Do I need this?
    console.assert(section, "the browser did not find section id")  //an assertion to see if the browser finds the id called section

    // section.classList.toggle("panel")

    // let panel = this.nextElementSibling;
    if(section.style.display === 'block') {
        section.style.display = 'none'
    } else section.style.display = 'block'


    // section.style.display = 'none'
    // sectionHeader.addEventListener("click", function() {
    //     section.style.display = 'block'
    // })
    
})