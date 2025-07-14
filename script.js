let tasks = [];

if(localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    renderTasks();
}

function addTask() {
    const input = document.getElementById("task-input");
    const task = input.value.trim();

    if(task !== "") {
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        renderTasks();
        input.value = "";
    }
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task,index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;

        const delBtn = document.createElement("button");
        delBtn.textContent = "✅";
        delBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTasks();
}