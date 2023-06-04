function addNewTask(){
  var list = document.getElementById("list");
  var text = document.getElementById("task_name").value;

  if(text.length == 0){
    alert("Por favor digite uma tarefa");
    return;
  }



  var listItem = document.createElement("li");
  listItem.className = "list-item";

  const textElement = document.createTextNode(text);
  listItem.appendChild(textElement);
  list.appendChild(listItem);

  var deleteButton = document.createElement("button_Remover");
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "X";
  deleteButton.onclick = function(){
    list.removeChild(listItem);
  }
  listItem.appendChild(deleteButton);
  list.appendChild(listItem);


}