import { useDispatch } from "react-redux";
import { deleteTask } from "../store";

export const ListItem = ({ curTask, index }) => {
  const dispatch = useDispatch();
  const handleDelBtn = (deleteIndex) => {
    return dispatch(deleteTask(deleteIndex));
  };
  return (
    <li className="todo-item">
      <span className="todo-text">
        {index} : {curTask}
      </span>
      <div className="todo-actions">
        <button
          className="todo-btn delete-btn"
          onClick={() => handleDelBtn(index)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
