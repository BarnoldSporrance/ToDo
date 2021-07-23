

const getToDo = (toDoArray)=>{
  let toDoWrapper  = document.getElementById('toDoWrapper');
  let counter = 0;
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
    toDoWrapper.innerHTML="";
    displayToDos(toDoArray, counter, toDoWrapper);

   return {toDoArray}
  });
}

//display contents of toDoArray on page.
const displayToDos  = (toDoArray, counter, toDoWrapper) =>{
  toDoWrapper.innerHTML = '';

    for (counter = 0; counter <toDoArray.length; counter++){
      let toDo = document.createElement('div');
      let toDoTitle  = document.createElement('div');
      let toDoDesc  = document.createElement('div');
      let toDoDueDate  = document.createElement('div');
      let toDoPriority  = document.createElement('div');

      toDo.setAttribute('id', 'toDo' + counter);
    //  console.log(toDo.id);

      toDo.setAttribute('class', 'toDoCard');


      toDoTitle.innerHTML = `TITLE: ${toDoArray[counter].titleVal}`;
      toDoTitle.setAttribute('class', 'toDoField');

      toDoDesc.innerHTML = `DESCRIPTION: ${toDoArray[counter].descriptionVal}`;
      toDoDesc.setAttribute('class', 'toDoField');

      toDoDueDate.innerHTML = `DUE: ${toDoArray[counter].dueDateVal}`;
      toDoDueDate.setAttribute('class', 'toDoField');


      toDoPriority.innerHTML = `PRIORITY: ${toDoArray[counter].priorityVal}`;
      toDoPriority.setAttribute('class', 'toDoField');


      toDo.appendChild(toDoTitle);
      toDo.appendChild(toDoDesc);
      toDo.appendChild(toDoDueDate);
      toDo.appendChild(toDoPriority);

      toDoWrapper.appendChild(toDo);
      }
  return {toDoArray}
  }

export {getToDo, displayToDos}




