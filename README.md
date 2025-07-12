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
