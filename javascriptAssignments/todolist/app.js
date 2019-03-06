let taskBox = document.getElementById('taskBox')
let addTask = document.getElementById('addTask')
let taskList = document.getElementById('taskList')




addTask.addEventListener('click', function () {

    let newTask = document.createElement("div");
    taskList.appendChild(newTask);
    newTask.className = "stylish";
    let completeBtn = document.createElement("button");
    newTask.appendChild(completeBtn);
    completeBtn.innerHTML = "Completed";
    completeBtn.addEventListener('click', function () {
        newTask.className = "reallystylish";
        completeBtn.remove()
    });
    let task = document.createElement("p");
    newTask.appendChild(task);
    task.innerHTML = taskBox.value
    let delBtn = document.createElement("button")
    delBtn.innerHTML = "Remove"
    delBtn.addEventListener('click', function () {
        newTask.remove()
    })
    newTask.appendChild(delBtn)
})



