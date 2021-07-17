import { toDoArray } from "./model";






const getToDo = ()=>{
  const addButton = document.getElementById("addToDoButton");
  addButton.addEventListener('click', function(){
    const title = document.getElementById('title');
    const titleVal = title.value;

    const description = document.getElementById('description');
    const descriptionVal = description.value;

    const dueDate = document.getElementById('dueDate');
    const dueDateVal = dueDate.value;

    const priority = document.getElementById('priority');
    const priorityVal = priority.value;

    const toDoObject = {titleVal, descriptionVal, dueDateVal, priorityVal}
    toDoArray.push(toDoObject);
   console.log(toDoArray);
   return {toDoArray}
  });
}




export {getToDo}




