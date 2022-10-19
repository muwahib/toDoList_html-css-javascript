var inputText = document.getElementById("input")[0];
let todobtn = document.querySelector(".todobtn") || [0];
todobtn.addEventListener('click', () => {
  todolist();
  if (inputText.value.trim() != 0){
    let storage = JSON.parse( localStorage.getItem("storage"))
    if(storage === null){
      todo = [];
    }else{
      todo = storage;
    }
    storage.push(input.value);
    localStorage.setItem("storage", JSON.stringify(todo));
  }
  showtodo();
})
todo = [];

function showtodo(){
  
  let output = "";
  var todoHolder_ul = document.getElementById("todoholder");
  let storage = JSON.parse( localStorage.getItem("storage"))
  if(storage === null){
    todo = [];
  }else{
    todo = storage;
  } 
  todo.forEach((data, index) => {
    output += ` <li>
    <input type="checkbox" id="check" name="accept" onchange="checklist(this)" />${data}
    <button class="del_button" onclick="delete_todo(${index})">Delete</button></li>`
  });
  todoHolder_ul.innerHTML = output;
}

function todolist() {
  var todo_template = ` <li>
  <input type="checkbox" id="check" name="accept" onchange="checklist(this)" />Do Homework 
  <button class="del_button" onclick="delete_todo(this)">Delete</button></li>`
  var inputText = document.getElementById("input");
  var todoHolder_ul = document.getElementById("todoholder");
  var li = document.createElement("li");
  var inputcheckbox = document.createElement("input");
  inputcheckbox.setAttribute("type", "checkbox");
  // li.innerHTML = localStorage.getItem("todo1");
  // localStorage.getItem("todo1");
  if (inputText.value == "") {
    alert("ma madhnan karo")
  } else {
    inputcheckbox.innerHTML = inputText.value;
    li.innerHTML = inputText.value;
    todoHolder_ul.innerHTML += ` <li>
        <input type="checkbox" id="check" name="accept" onchange="checklist(this)" />${inputText.value}
        <button class="del_button" onclick="delete_todo(this)"">Delete</button></li>`
    // localStorage.setItem("todo1", inputText.value);
    // inputText.value = "";  
  }
}

function checklist(inputcheckbox) {

  if (inputcheckbox.checked) {
    inputcheckbox.parentElement.classList.add("done");

  } else {
    inputcheckbox.parentElement.classList.remove("done");
  }
}

function delete_todo(index) {

    let storage = JSON.parse(localStorage.getItem("storage"))
    todo.splice(index, 1)
    localStorage.setItem("storage", JSON.stringify(todo));
  showtodo();
}

function cleartodo(){
  localStorage.clear()
  showtodo();
}
