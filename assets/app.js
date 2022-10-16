let todobtn = document.querySelector(".todobtn")
todobtn.addEventListener('click', function () {
    todolist();
    checklist();
    delete_check();
})
let del_button = document.querySelector(".del_button")
del_button.addEventListener('click', function () {
   
    delete_check();
})
function todolist() {
    var todo_template = ` <li>
    <input type="checkbox" id="check" name="accept" onchange="checklist(this)" />Do Homework 
  </li>`
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
        <i class="fa-regular fa-trash-can"></i></li>`
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

function delete_check(){
    var checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    if (checkbox.checked) {
        checkbox.parentElement.classList.remove("done");
      } else {
        alert("wow");
      }

}

