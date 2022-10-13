let todobtn = document.querySelector(".todobtn")
todobtn.addEventListener('click', function(){
    todolist()
})
function todolist(){
    var input = document.getElementById("input");
    var todoHolder = document.getElementById("todoholder")
    var li = document.createElement("li")   
    if (input.value ==""){
        alert("ma noqon karto empty")
    }else{
        li.innerHTML = input.value;
        todoHolder.appendChild(li);
        input.value = "";
    }
} 




