import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FECTH_TASK = "task/fetch";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  if (action.type === ADD_TASK) {
    return {
      ...state,
      task: [...state.task, action.payload],
    };
  } else if (action.type === DELETE_TASK) {
    const updateTask = state.task.filter((curTask, index) => {
      return index !== action.payload;
    });

    return {
      ...state,
      task: updateTask,
    };
  } else if (action.type === FECTH_TASK) {
    return {
      ...state,
      task: [...state.task, ...action.payload],
    };
  }
  return state;
};

// Action Creater
export const addTAsk = (data) => {
  return { type: ADD_TASK, payload: data };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const fetchTask = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=3",
      );
      const task = await res.json();
      console.log(task);

      dispatch({
        type: FECTH_TASK,
        payload: task.map((curTask) => curTask.title),
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Create Store
export const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
