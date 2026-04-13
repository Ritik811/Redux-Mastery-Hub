import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
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
export const addTAsk = (data) => {
  return { type: "ADD_TASK", payload: data };
};

export const deleteTask = (id) => {
  return { type: "DELETE_TASK", payload: id };
};

// Create Store
export const store = createStore(taskReducer,composeWithDevTools());
