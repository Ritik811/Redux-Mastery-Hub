import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchTask = createAsyncThunk("task/fetch", async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=3",
    );
    const data = await res.json();

    // Sirf titles ka array return kar rahe hain jaisa tumne pehle kiya tha
    return data.map((curTask) => curTask.title);
  } catch (err) {
    console.log(err);
  }
});

const taskReducer = createSlice({
  name: "task",
  initialState: {
    task: [],
    loading: false,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.loading = false;
        state.task.push(...action.payload);
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.error = "Something went wrong data is not fatch";
      });
  },
});

export const { addTAsk, deleteTask } = taskReducer.actions;

export const store = configureStore({
  reducer: {
    todo: taskReducer.reducer,
  },
});
