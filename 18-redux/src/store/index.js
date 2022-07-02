import {createStore} from "redux";

const defaultState = {
  counter: 0
};

const reducer = (state = defaultState, action) => {
  const type = action.type;
  
  if (type === 'increment')
    return { counter: state.counter + 1 };
  else if (type === 'increase')
    return { counter: state.counter + action.amount };
  else if (type === 'decrement')
    return { counter: state.counter - 1 };
  
  return state;
};

const store = createStore(reducer);


export default store;
