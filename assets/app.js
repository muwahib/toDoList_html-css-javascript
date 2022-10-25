// btn event listners
var inputText = document.getElementById("input")[0];
var todobtn = document.querySelector(".todobtn") || [0];
todobtn.addEventListener('click', () =>{
  addtodo();
 
});

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
      // console.log(obj)
      localStorage.setItem("todos", JSON.stringify(obj));
    } else {
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
  location.reload();
}

//show function
function showtodo(){
  // read from localstorage
  let storage = localStorage.getItem("todos");

  //convert to javascript value
  const data = JSON.parse(storage);

  //post to my html
  var todoHolder_ul = document.getElementById("todoholder");
  temp = `<li>
  <input type="checkbox" id="check" name="accept" />
  <button class="del_button" >Delete</button>
  </li>`;
  for (let i = 0; i < data.length; i++){
    todoHolder_ul.innerHTML += `<li>
    <input type="checkbox" id="check" name="accept" />
    ${data[i].task}
    <button class="del_button">Delete</button>
    </li>`;
  }
 
}

//delete function
function delete_todo(){
  
}

//update function



//clear function


// output += ` <li>
// <input type="checkbox" id="check" name="accept" onchange="checktodo(this)" />${data}
// <button class="del_button" onclick="delete_todo(${index})">Delete</button></li>`

// page load
window.addEventListener("load", function(){
  // alert("hi")
  showtodo();
})