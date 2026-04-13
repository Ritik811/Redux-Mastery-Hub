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

// Action Creater
const addTAsk = (data) => {
  return { type: "ADD_TASK", payload: data };
};

const deleteTask = (id) => {
  return { type: "DELETE_TASK", payload: id };
};

// Create Store
export const store = createStore(taskReducer);

console.log(store);

store.dispatch(addTAsk("Ritik hu mai"));
console.log(store.getState());

store.dispatch(addTAsk("Tipu hu mai"));
console.log(store.getState());

store.dispatch(deleteTask(1));
console.log(store.getState());
