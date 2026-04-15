........................START--->REDUX--->Toolkt.................................
Live Project Link:- "todo-app-redux-2026.netlify.app";

Step 1. install bun i @reduxjs/toolkit
Step 2. Create Store 
code:- 
export const store = configureStore({
  reducer: taskReducer, // yah function hai jo call bnana prta hai
});

Step 3. CreateSlice ka use krna hai 
defination:- createSlice ek aisa function hai jo ek name, initial state, aur reducer functions ka object leta hai, aur automatically unke hisaab se action creators aur action types generate kar deta hai.
Asaan bhasha mein: "Ye ek single package hai jisme Action aur Reducer dono saath mein bante hain."

code:-
const taskReducer = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducer: {
    addTAsk(state, action) {},
    deleteTask(state, action) {},
  },
});

Step 4. Action Create krna hai
code:-
const { addTAsk, deleteTask } = taskReducer.actions; // reducer ka name.actions

Step 5. How add and delete data 
code:- 
reducer: {
    addTAsk(state, action) {
      store.task = store.task.push(action.payload);
    },
    deleteTask(state, action) {
      store.task = store.task.filter(
        (curTask, index) => index !== action.payload,
      );
    },
  },

Step 6. change store
code:-
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.task, // istarah se likhna hai 
  },
});

Step 7. How to connect redux in react
1. npm i react-redux
2. open main.jsx rap the App by Provider
code:-
import { store } from "./store.jsx";
    <Provider store={store}>
        <App />
    </Provider>

Step 8. What is useSelector()
defination:- useSelector ek aisa Hook hai jo React components ko Redux Store se data read (access) karne ki permission deta hai.
code:-
const tasks = useSelector((state) => state.taskReducer.task);

Step 9. what is useDispatch
defination:-useDispatch ek React-Redux hook hai jo humein dispatch function ka access deta hai. Is function ka use karke hum Actions ko Redux store tak bhejte hain, taaki Reducers ko pata chale ki state mein kya badlav karna hai.
Asaan bhasha mein: "Ye wo 'Send' button hai jo tumhare Action (message) ko Reducer (receiver) tak le jata hai."
code:-
const dispatch = useDispatch();
  const handleDelBtn = (deleteIndex) => {
    return dispatch(deleteTask(deleteIndex));
  };

Sept 10. what is createAsyncThunk
defination:- createAsyncThunk ek aisa function hai jo "Asynchronous" operations (jaise API calls) ko handle karta hai. Ye khud ba khud teen states generate kar deta hai:
Pending: Jab data load ho raha ho (Loading...).

Fulfilled: Jab data successfully aa jaye (Success!).

Rejected: Agar koi error aa jaye (Error!).

code:- createAsyncThunk yah do chize leta hai (name or async function)
1. export const fetchTask = createAsyncThunk("task/fetch", async () => {
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

2. hame loading or error ko initialState me add krna pdta hai or uske baad hame reducers ke bahar extraReducers object bna pdta hai usme hame builder apne aap milta hai or uski madata se (Pending,fulfilled,rejected) is property ka use kr skte hai
const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Tumhare purane add/delete yahan rahenge
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.loading = false;
        state.task = action.payload; // Ye action.payload wahi hai jo humne return kiya tha
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.loading = false;
        state.error = "Data fetch karne mein galti ho gayi!";
      });
  },
});
## Interviewer Alert: "Builder Pattern"
Interviewer pooch sakta hai: "Ritik, extraReducers mein ye builder object kya hai aur addCase kyun use karte hain?"

Tera Answer: > "Sir, Redux Toolkit mein builder callback pattern ka use hota hai taaki hum typesafe actions handle kar sakein. addCase humein allow karta hai ki hum specific action states (pending, fulfilled, rejected) ko listen karein aur unke basis par state update karein bina string constants manually likhe."