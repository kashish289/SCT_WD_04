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
