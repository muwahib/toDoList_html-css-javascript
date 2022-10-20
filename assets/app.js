// add function
todo = [];
function addtodo(){
  var inputText = document.getElementById("input"); 
  if (inputText.value != null){
    localStorage.setItem("todos", JSON.stringify(todo));
    if (storage == null){
      todo = [];
    } else {
      todo = storage;
    }
    storage.push(todo);
    var storage = JSON.parse(localStorage.getItem("todos"));
  }
}

// btn event listners

var inputText = document.getElementById("input");
var todobtn = document.querySelector(".todobtn");
todobtn.addEventListener('click', () =>{
  addtodo();

});




























// function checktodo
// function checktodo(inputcheckbox){

//   if (inputcheckbox.checked){
//     inputcheckbox.parentElement.classlist.add("done")
//   }else{
//     inputcheckbox.parentElement.classlist.remove("done")
//   }
  
// }

// show function
// function showtodo(){
//   var todoTemplate = ` <li>
//   <input type="checkbox" id="check" name="accept" onchange="checktodo(this)" />Do homework
//   <button class="del_button" onclick="delete_todo(this)">Delete</button></li>`;
//   var inputText = document.getElementById("input");
//   var todoholder_ul = document.getElementById("todoholder");
//   var li = document.createElement("li");
//   var inputcheckbox = document.createElement("input");
//   inputcheckbox.setAttribute("type", "checkbox");
//   if (inputText.value == ""){
//     alert("can't be null")
//   }else{
//     inputcheckbox.innerHTML = inputText.value;
//     li.innerHTML = inputText.value;
//     todoholder_ul.innerHTML += `<li>
//     <input type="checkbox" id="check" name="accept" onchange="checktodo(this)" />${inputText.value} 
//     <button class="del_button" onclick="delete_todo(this)">Delete</button></li>`;
//   }
// }
// delete function

// update function


// output += ` <li>
// <input type="checkbox" id="check" name="accept" onchange="checktodo(this)" />${data}
// <button class="del_button" onclick="delete_todo(${index})">Delete</button></li>`