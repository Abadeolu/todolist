// declare todo container
let todo_array = [
    {
        name: "name",
        description: "description",
        status: "pending"
    }
]

// select the input fields and html elements
let todo_name_field = document.getElementById("task")
let todo_description_field = document.getElementById("description")
let add_todo_btn = document.querySelector("addTodoBtn")
//select the table body where we will add todo
let todo_table_body = document.querySelector("todo_table_body")

//create add todo function
let add_todo = function(){
    //get values from input fields
    todo_name = todo_name_field.value.trim()
    todo_description = todo_description_field.value.trim()
    //check if task is empty
    if (todo_name === ""){
        alert("Please enter a task name")
        return
    }
    //create todo object
    let newTodo = {
        name: todo_name,
        description: todo_description,
        status: false //means not completed
    }

    todo_array.push(newTodo)
    //clear input field
    todo_name_field = ""
    todo_description_field = ""
    //update the ui

    //function to render todos into the table
    render_todo()
}

