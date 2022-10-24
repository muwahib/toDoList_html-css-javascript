// add function

todo = [];

function addtodo(){
  let inputText = document.getElementById("input"); 
  if (inputText.value !== ""){
    let storage = JSON.parse(localStorage.getItem("todos"));
    
    if (storage == null ){
      var obj = [
        {
          task : inputText.value,
          status: "undone"
        }
      ]
      console.log(obj)
      localStorage.setItem("todos", JSON.stringify(obj));
      
    } else {
        // todo = [];
        // storage = JSON.parse(localStorage.getItem("todos"));
        // todo.push(storage);
        // todo.push(inputText.value);
        // localStorage.setItem("todos", JSON.stringify(todo));
        // console.log(todo);
        var todos = JSON.parse(localStorage.getItem("todos"));
        var td = Array.from(todos);
        localStorage.setItem("todos", JSON.stringify([...JSON.parse(localStorage.getItem("todos") || "[]"),
        {
          task : inputText.value,
          status: "undone"
        }
      ]));
        
      }
      
   
  } else {
    alert("can't be empty");
  }
}
// btn event listners

var inputText = document.getElementById("input")[0];
var todobtn = document.querySelector(".todobtn") || [0];
todobtn.addEventListener('click', () =>{
  addtodo();
  // todolist();

});








