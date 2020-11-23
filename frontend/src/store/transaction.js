import { fetch } from "./csrf";

const GET_HISTORY = "transactions/history";
const GET_ALL = "transactions/all";

const getHistory = (transactions) => {
  return {
    type: GET_HISTORY,
    payload: transactions,
  };
};

const getAll = (activity) => {
  return {
    type: GET_ALL,
    payload: activity,
  };
};

export const recentActivity = () => async (dispatch) => {
  const res = await fetch("/api/transactions/all");
  dispatch(getAll(res.data));
};

export const transactions = () => async (dispatch) => {
  const res = await fetch("/api/transactions/history");
  // array of transaction objects
  dispatch(getHistory(res.data));

  return res;
};

const transactionReducer = (
  state = { transactions: null, history: null },
  action
) => {
  let newState;
  switch (action.type) {
    case GET_HISTORY:
      newState = Object.assign({}, state);
      newState.transactions = action.payload;
      // console.log("state", newState);
      // console.log("action", action.payload);
      return newState;
    case GET_ALL:
      newState = Object.assign({}, state);
      newState.history = action.payload;
      // console.log("state", newState);
      // console.log("action", action.payload);
      return newState;
    default:
      return state;
  }
};

export default transactionReducer;
