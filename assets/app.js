// add function

todo = [];
function addtodo(){
  var inputText = document.getElementById("input"); 
  if (inputText.value != ""){
    var storage = JSON.parse(localStorage.getItem("todos"));
    if (storage == null){
      localStorage.setItem("todos", JSON.stringify(""));
      storage = JSON.parse(localStorage.getItem("todos"))
      todo = [];
      // todo.push(storage);
    } else {
      storage = JSON.parse(localStorage.getItem("todos"));
      todo.push(storage);
      todo.push(inputText.value);
      var names = ["warsame", "ali"]
      names.push(inputText.value)
      localStorage.setItem("todos", JSON.stringify(names));
    }
    // storage.push(todo);
    // localStorage.setItem("todos", JSON.stringify(inputText.value));
  }else {
    alert("can't be empty");
  }
}

// btn event listners

var inputText = document.getElementById("input");
var todobtn = document.querySelector(".todobtn");
todobtn.addEventListener('click', () =>{
  addtodo();

});

// function checktodo


// show function

// update function


// output += ` <li>
// <input type="checkbox" id="check" name="accept" onchange="checktodo(this)" />${data}
// <button class="del_button" onclick="delete_todo(${index})">Delete</button></li>`