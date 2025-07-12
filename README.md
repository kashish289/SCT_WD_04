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
