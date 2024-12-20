// import { useState } from "react";

// function TodoList() {
//   const [tasks, setTasks] = useState([
//     { task: "eat breakfast", isChecked: false },
//     { task: "take shower", isChecked: false },
//     { task: "walk the dog", isChecked: false },
//   ]);
//   const [newTask, setNewTask] = useState("");
//   const [editingTask, setEditingTask] = useState(null);
//   const [newTaskName, setNewTaskName] = useState("");

//   function handleInputChange(event) {
//     setNewTask(event.target.value);
//   }

//   // Add a new task
//   function addTask() {
//     if (newTask.trim() !== "") {
//       setTasks((t) => [...t, { task: newTask, isChecked: false }]);
//       setNewTask("");
//     }
//   }

//   // Delete a task
//   function deleteTask(index) {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   }

//   //Edit task
//   const edit = (index) => {
//     const taskToEdit = tasks[index];
//     setEditingTask(taskToEdit); // Set the task being edited
//     setNewTaskName(taskToEdit.name); // Populate the input field with the task's current name
//   };

//   const saveEdit = () => {
//     const updatedTasks = tasks.map((task) =>
//       task.id === editingTask.id
//         ? { ...task, name: newTaskName } // Update the name of the edited task
//         : task
//     );
//     setTasks(updatedTasks); // Update the state with the modified tasks
//     setEditingTask(null); // Clear the editing state
//     setNewTaskName(""); // Clear the input field
//   };

//   // Handle checkbox change for individual tasks
//   function handleCheckboxChange(index) {
//     const updatedTasks = tasks.map((task, i) =>
//       i === index ? { ...task, isChecked: !task.isChecked } : task
//     );
//     setTasks(updatedTasks);
//   }

//   return (
//     <div className="todolist">
//       <h1>Todo List</h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Insert a task..."
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button className="addButton" onClick={addTask}>
//           Add
//         </button>
//       </div>

//       <ol>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               onChange={() => handleCheckboxChange(index)}
//               checked={task.isChecked}
//             />
//             <span className="text">{task.task}</span>

//             <button
//               className="delete"
//               onClick={() => deleteTask(index)}
//               disabled={!task.isChecked} // Disable delete button if not checked
//             >
//               Delete
//             </button>

//             {editingTask && editingTask.index === task.index ? (
//               <input
//                 type="text"
//                 value={newTaskName}
//                 onChange={(e) => setNewTaskName(e.target.value)}
//               />
//             ) : (
//               task.name
//             )}
//             <button onClick={() => edit(index)}>Edit</button>

//             {editingTask && editingTask.index === task.index && (
//               <button onClick={saveEdit}>Save</button>
//             )}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default TodoList;
//
//new

import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");

  // Add new to-do
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Toggle checkbox to mark as completed
  const handleToggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Delete todo item
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Edit todo item
  const handleEditTodo = (index) => {
    setEditingTodo(index);
    setEditedText(todos[index].text);
  };

  // Save edited todo
  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingTodo].text = editedText;
    setTodos(updatedTodos);
    setEditingTodo(null);
    setEditedText("");
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>

      {/* New Todo Input */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {/* Checkbox to mark complete */}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(index)}
            />

            {/* Editing Todo Text */}
            {editingTodo === index ? (
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
            ) : (
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
            )}

            {/* Edit Button */}
            {editingTodo !== index && (
              <button onClick={() => handleEditTodo(index)}>Edit</button>
            )}

            {/* Delete Button (only enabled if checked) */}
            <button
              onClick={() => handleDeleteTodo(index)}
              disabled={!todo.completed}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Save Edited Todo */}
      {editingTodo !== null && (
        <button onClick={handleSaveEdit}>Save Edit</button>
      )}
    </div>
  );
}

export default TodoList;
