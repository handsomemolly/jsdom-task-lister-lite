document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.getElementById("create-task-form")
  // create a select dropdown for level of importance
  const selectDropDown = document.createElement("select")

  //insert the select dropdown into the existing form
  myForm.children[1].insertAdjacentElement("afterend", selectDropDown)
  const highOption = document.createElement("option")
  highOption.innerText = "high"
  selectDropDown.append(highOption)

  const mediumOption = document.createElement("option")
  mediumOption.innerText = "medium"
  selectDropDown.append(mediumOption)

  const lowOption = document.createElement("option")
  lowOption.innerText = "low"
  selectDropDown.append(lowOption)
  

  function handleDelete(e) {
    e.target.parentElement.remove()
  }

  function importanceColor(importance) {
    if (importance === "high") {
      return "red"
    } else if (importance === "medium") {
      return "orange"
    } else {
      return "green"
    }
  }

  function handleFormSubmit(e) {
    // prevent default form action (refresh)
    e.preventDefault()
    // get parameters from the text box you intend to submit
    // save the user's task as a variable
    // call e.target to get to access the new task description (where the text lives)
    const newTask = e.target["new-task-description"].value
    // save the importance value into a variable
    const importanceLevel = e.target.children[2].value
    // convert importance level into a color
    const taskColor = importanceColor(importanceLevel)

    // display the task on the DOM
    // we want this to show up under div id="list" > ul id="tasks"
    const taskUL = document.querySelector("#tasks")
    // create a delete button
    const deleteBtn = document.createElement("button")
    // add event listener and create function to handle the delete function
    deleteBtn.addEventListener("click", handleDelete)
    // make the innter text an X
    deleteBtn.innerText = "X"
    // create a new li tag
    const LI = document.createElement("li")
    LI.style.color = taskColor

    // take info from the user input and add that to the LI
    // first modify the LI to have text in it 
    LI.textContent = newTask
    // append the button to the textContent
    LI.append(deleteBtn)
    // then append as a child onto the taskUL
    taskUL.appendChild(LI)
    // clear the form so that 
    e.target.reset()
  
  }

  myForm.addEventListener("submit", handleFormSubmit)



});
