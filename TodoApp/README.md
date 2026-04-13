.................................START--->REDUX.......................................

Important Note:- Kabhi bhi hame data ko direct change nhi krna hai us se pahele uska dublicate data bnana hai 
Example Code:- 
  if (action.type === "ADD_TASK") {
    return {
      ...state,  // sabse pahel dublicate bnaya spread operater ka use krke 
      task: [...state.task, action.payload], // ab operation perform kiya 
    };
  }

Step 1. Create Store
code:- 
const store = createStore(taskReducer); // Yah taskReducre function hai

Step 2. Create taskReducre Function.
defination:- iske under ham apne sare function ke logic likte hai 
code:-
const initialState = {  // Iske under sare data ko initialized krna hota hai object
 // ki form me
  task: [], // jaise sirf maine task ko kiya hai
};  

const taskReducer = (state = initialState, action) => { //yah hame bydefault milta hai
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      task: [...state.task, action.payload], // 
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

Step 3. use dispatch 
defination:- iska use ham jab function ko call krna hota hai tb krte hai q ki store ke under dispatch ka option hota 
code:- 
store.dispatch({ type: "ADD_TASK", payload: "Ritik hu mai" });
console.log(store.getState()); // iska use ham apne current state/changes ko dekhne ke liye krte hai

store.dispatch({ type: "ADD_TASK", payload: "Tipu hu mai" });
console.log(store.getState());

store.dispatch({ type: "DELETE_TASK", payload: 1 });
console.log(store.getState());

Step 4. Action Creator
defination:- function create krke call krna 
code:- 
const addTAsk = (data) => {
  return { type: "ADD_TASK", payload: data };
};

const deleteTask = (id) => {
  return { type: "DELETE_TASK", payload: id };
};

store.dispatch(addTAsk("Ritik hu mai")); // ab istrah se use krte hai

Step 5. How to access store in React
1. using useSelecter() hook provide react-redux
defination:- iski madat se ham store ko access kr skte hai 
syntax const state = useSelector((state) = >state);
consol.log(state);
code:- 
const tasks = useSelector((state) => state.task);

Step 6. How to Call Action in react-redux using useDispacth();
defination:- useDispacth() ka use krke ham action ko store ke under direct call kr skte hai 
code:- 
const dispatch = useDispatch();
const handleAddTask = () => {
    const task = inputRef.current.value;
    console.log(task);
    inputRef.current.value = "";
    dispatch(addTAsk(task)); // yaha pr call kiya hai dispacth ka use krke
  };

Step 7. How to download redux devtools and use in browser
1. search redux devtools in any browser
2.import { composeWithDevTools } from "@redux-devtools/extension";
3. export const store = createStore(taskReducer,composeWithDevTools()); // yaha pr call krna hai 