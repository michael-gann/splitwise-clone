import { fetch } from "./csrf";

const GET_HISTORY = "transactions/history";

const getHistory = (transactions) => {
  return {
    type: GET_HISTORY,
    payload: transactions,
  };
};

export const transactions = () => async (dispatch) => {
  const res = await fetch("/api/transactions/history");
  // array of transaction objects
  dispatch(getHistory(res.data));

  return res;
};

const transactionReducer = (state = { transactions: null }, action) => {
  let newState;
  switch (action.type) {
    case GET_HISTORY:
      newState = Object.assign({}, state);
      newState.transactions = action.payload;
      // console.log("state", newState);
      // console.log("action", action.payload);
      return newState;
    default:
      return state;
  }
};

export default transactionReducer;
