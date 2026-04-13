export const ListItem = ({ curTask, index }) => {
  return (
    <li class="todo-item">
      <span class="todo-text">
        {index} : {curTask}
      </span>
      <div class="todo-actions">
        <button class="todo-btn delete-btn">Delete</button>
      </div>
    </li>
  );
};
