import { configureStore, createSlice } from "@reduxjs/toolkit";

const FECTH_TASK = "task/fetch";

// export const fetchTask = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=3",
//       );
//       const task = await res.json();
//       console.log(task);

//       dispatch({
//         type: FECTH_TASK,
//         payload: task.map((curTask) => curTask.title),
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

const taskReducer = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    addTAsk(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (curTask, index) => index !== action.payload,
      );
    },
  },
});

export const { addTAsk, deleteTask } = taskReducer.actions;

export const store = configureStore({
  reducer: {
    todo: taskReducer.reducer,
  },
});
