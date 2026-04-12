import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      task: [...state.task, action.payload],
    };
  } else if (action.type === "DELETE_TASK") {
    const updateTask = state.task.filter((curTask, index) => {
      return index !== action.payload;
    });

    return {
      ...state,
      task: updateTask,
    };
  }
  return state;
};

// Create Store
const store = createStore(taskReducer);

console.log(store);

store.dispatch({ type: "ADD_TASK", payload: "Ritik hu mai" });
console.log(store.getState());

store.dispatch({ type: "ADD_TASK", payload: "Tipu hu mai" });
console.log(store.getState());

store.dispatch({ type: "DELETE_TASK", payload: 1 });
console.log(store.getState());