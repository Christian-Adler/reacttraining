import {createStore} from "redux";

const initialState = {
  counter: 0,
  showCounter: true
};

const reducer = (state = initialState, action) => {
  const type = action.type;
  
  if (type === 'increment')
    return { ...state, counter: state.counter + 1 };
  else if (type === 'increase')
    return { ...state, counter: state.counter + action.amount };
  else if (type === 'decrement')
    return { ...state, counter: state.counter - 1 };
  else if (type === 'toggle')
    return { ...state, showCounter: !state.showCounter };
  
  return state;
};

const store = createStore(reducer);


export default store;
