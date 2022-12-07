// btn event listners
var inputText = document.getElementById("input");
var todobtn = document.getElementById("todobtn");
todobtn.addEventListener('click', () => {
  addtodo();
});
// add function
todo = [];
function addtodo() {
  let inputText = document.getElementById("input");
  if (inputText.value !== "") {
    let storage = JSON.parse(localStorage.getItem("todos"));
    if (storage == null) {
      var obj = [
        {
          task: inputText.value,
          status: "checked"
        }
      ]
      // console.log(obj)
      localStorage.setItem("todos", JSON.stringify(obj));
    } else {
      var todos = JSON.parse(localStorage.getItem("todos"));
      var td = Array.from(todos);
      localStorage.setItem("todos", JSON.stringify([...JSON.parse(localStorage.getItem("todos") || "[]"),
      {
        task: inputText.value,
        status: "unchecked"
      }
      ]));
    }
  } else {
    alert("can't be empty");
  }
  location.reload();
}
//show function
function showtodo() {
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
  for (let i = 0; i < data.length; i++) {
    let checked;
    let lineClass;
    if (data[i].status == "checked") {
      checked = "checked";
      lineClass = "done"
    } else {
      checked = ""
      lineClass = ""
    }
    todoHolder_ul.innerHTML += `<li class="${lineClass}">
    <input type="checkbox" id="check" name="accept" ${checked} onchange="update_todo(${[i]},this)"/>
    ${data[i].task} 
    <button class="btn btn-danger btn-sm del_button" onclick="delete_todo(${[i]},this)" >Delete</button>
    </li>`;
  }
}
// delete function
function delete_todo(index) {
  var todos = JSON.parse(localStorage.getItem("todos"));
  var td = Array.from(todos);
  console.log(td[index].status);
  var deleted_index = td.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(td));
  location.reload();
}
// update function
function update_todo(index, inputcheck) {
  var checkbox = document.createElement("check");
  checkbox.setAttribute("type", "checkbox");
  var todos = JSON.parse(localStorage.getItem("todos"));
  var td = Array.from(todos);
  if (td[index].status == "unchecked") {
    td[index].status = "checked"
    inputcheck.parentElement.classList.add("done");
    localStorage.setItem("todos", JSON.stringify(td));

  } else {
    inputcheck.parentElement.classList.remove("done");
    td[index].status = "unchecked"
    localStorage.setItem("todos", JSON.stringify(td));

  }
}
// page load
window.addEventListener("load", function () {
  showtodo();
})
