//store todo list
const todoList =[]

//select elements from dom
const taskInput = document.querySelector("#task");
const descriptionInput = document.querySelector("#description");
const addTodoButton = document.querySelector("#addTodoBtn");
const todoTableBody = document.querySelector("#todo_table_body");

// Function to add a new to-do
function addTodo() {
    // Get and trim input values
    const taskName = taskInput.value.trim();
    const taskDescription = descriptionInput.value.trim();

    // Validate input fields
    if (taskName === "" || taskDescription === "") {
        alert("Please enter both task name and description.");
        return;
    }

    // Create new to-do object
    const newTodo = {
        name: taskName,
        description: taskDescription,
        status: false, // false means "not completed"
    };

    // Add task to array
    todoList.push(newTodo);

    // Clear input fields
    taskInput.value = "";
    descriptionInput.value = "";

    // Re-render the table to show the new task
    renderTodos();
}

// Function to render the to-do list in the table
function renderTodos() {
    // Clear the table before re-rendering
    todoTableBody.innerHTML = "";

    // Loop through the todoList array and create rows
    todoList.forEach((todo, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${todo.name}</td>
            <td>${todo.description}</td>
            <td>${todo.status ? "Completed" : "Pending"}</td>
            <td>
                <button onclick="completeTodo(${index})">Complete</button>
                <button onclick="deleteTodo(${index})">Delete</button>
            </td>
        `;

        // Append the row to the table body
        todoTableBody.appendChild(row);
    });
}

// Function to mark a task as completed
function completeTodo(index) {
    todoList[index].status = true;
    renderTodos(); // Update UI
}

// Function to delete a task
function deleteTodo(index) {
    todoList.splice(index, 1); // Remove task from array
    renderTodos(); // Update UI
}

// Attach event listener to the add button
addTodoButton.addEventListener("click", addTodo);