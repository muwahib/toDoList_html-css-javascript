let todobtn = document.querySelector(".todobtn")
todobtn.addEventListener('click', function () {
    todolist();
    // checklist();
    // delete_todo();
})

function todolist() {
    var todo_template = ` <li>
    <input type="checkbox" id="check" name="accept" onchange="checklist(this)" />Do Homework 
    <button class="del_button" onclick="delete_todo(this)">Delete</button></li>`
    var input = document.getElementById("input");
    var todoHolder = document.getElementById("todoholder")
    var li = document.createElement("li")
    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    if (input.value == "") {
        alert("ma madhnan karo")
    } else {
        checkbox.innerHTML = input.value;
        li.innerHTML = input.value;
        todoHolder.innerHTML += ` <li>
        <input type="checkbox" id="check" name="accept" onchange="checklist(this)" />${input.value}
        <button class="del_button" onclick="delete_todo(this)"">Delete</button></li>`
        localStorage.setItem("todo1", input.value)
        input.value = "";
    }
}
function checklist(checkbox){ 

  if (checkbox.checked) {
    checkbox.parentElement.classList.add("done");
  } else {
    checkbox.parentElement.classList.remove("done");
  }
}

function delete_todo(del_button){

    if (del_button != "") {
        // document.querySelector("li").remove();
        del_button.parentElement.remove();
      } else{
        alert("we can't delete a todo which is not done");
      }    
}
