const redux = require("redux");

const defaultState = {
  counter: 0,
};

/**
 * pure function - no side effects!
 */
const counterReducer = (state = defaultState, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

// first state
// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
