import { useSelector } from "react-redux";
import { ListItem } from "./ListItem";

export const Todo = () => {
  const tasks = useSelector((state) => state.task);
  return (
    <section class="todo-section">
      <div class="todo-container">
        <header class="todo-header">
          <h1>Todo List</h1>
          <p>Stay organized, stay productive.</p>
        </header>

        <div class="todo-input-group">
          <input
            type="text"
            placeholder="Add a new task..."
            class="todo-input"
          />
          <button class="todo-add-btn">Add Task</button>
        </div>

        <ul class="todo-list">
          {tasks.map((curTask, index) => {
            return <ListItem curTask={curTask} index={index} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};
