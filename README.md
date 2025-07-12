# SCT_WD_04
to do web
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
body {
  font-family: Arial, sans-serif;
  background: #f0f2f5;
  margin: 0;
  padding: 0;
}

.todo-container {
  max-width: 500px;
  margin: 50px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

h1 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input[type="text"],
input[type="datetime-local"] {
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

button:hover {
  background: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f7;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.completed {
  text-decoration: line-through;
  color: gray;
}
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
