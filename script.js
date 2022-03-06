//select element
//queySelectorAll : select all panel classes
const panels = document.querySelectorAll(".panel");

//Array Method forEach takes in a function as an argument
panels.forEach((panel) => {
  //Add event listener to each panel by clicking it
  panel.addEventListener("click", () => {
    //while clicking panel, we add class 'active'
    //removeActiveClasses need to be befoe add active
    removeActiveClasses();
    panel.classList.add("active");
    
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}
