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