import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "./ListItem";
import { useRef } from "react";
import { addTAsk } from "../store.jsx"

export const Todo = () => {
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleAddTask = () => {
    const task = inputRef.current.value;
    console.log(task);
    inputRef.current.value = "";
    dispatch(addTAsk(task));
  };
  return (
    <section className="todo-section">
      <div className="todo-container">
        <header className="todo-header">
          <h1>Todo List</h1>
          <p>Stay organized, stay productive.</p>
        </header>

        <div className="todo-input-group">
          <input
            type="text"
            placeholder="Add a new task..."
            className="todo-input"
            ref={inputRef}
          />
          <button className="todo-add-btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        <ul className="todo-list">
          {tasks.map((curTask, index) => {
            return <ListItem curTask={curTask} index={index} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
};
