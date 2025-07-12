
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>To-Do App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="todo-container">
    <h1>My To-Do List</h1>
    <form id="task-form">
      <input type="text" id="task-title" placeholder="Enter task" required />
      <input type="datetime-local" id="task-date" />
      <button type="submit">Add Task</button>
    </form>

    <ul id="task-list"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>

const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const titleInput = document.getElementById("task-title");
  const dateInput = document.getElementById("task-date");

  const title = titleInput.value.trim();
  const date = dateInput.value;

  if (title === "") return;

  const li = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = `${title}${date ? " - " + new Date(date).toLocaleString() : ""}`;
  li.appendChild(taskText);

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✓";
  completeBtn.style.marginLeft = "10px";
  completeBtn.onclick = () => {
    taskText.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.style.marginLeft = "5px";
  editBtn.onclick = () => {
    const newTitle = prompt("Edit task title:", title);
    if (newTitle !== null && newTitle.trim() !== "") {
      titleInput.value = newTitle;
      taskText.textContent = `${newTitle}${date ? " - " + new Date(date).toLocaleString() : ""}`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.style.marginLeft = "5px";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  titleInput.value = "";
  dateInput.value = "";
});
