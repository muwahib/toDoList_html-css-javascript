let todobtn = document.querySelector(".todobtn")
todobtn.addEventListener('click', function () {
    todolist();

})
function todolist() {
    var todo_template = ` <li>
    <input type="checkbox" id="check" name="accept" onchange="checklist(this.value)"/>Do Homework 
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
        <input type="checkbox" id="check" name="accept" onchange="checklist(this.value)" />${input.value}
      </li>`
        input.value = "";
    }
}

function checklist(value){
    
    //checked
    //unchecked
}