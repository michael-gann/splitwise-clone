import { fetch } from "./csrf";

const GET_BALANCES = "transactions/balances";
const GET_ALL = "transactions/all";

const getBalances = (balances) => {
  return {
    type: GET_BALANCES,
    payload: balances,
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

export const balances = () => async (dispatch) => {
  const res = await fetch("/api/transactions/balances");
  // array of transaction objects
  dispatch(getBalances(res.data));

  return res;
};

const transactionReducer = (
  state = { balances: null, history: null },
  action
) => {
  let newState;
  switch (action.type) {
    case GET_BALANCES:
      newState = Object.assign({}, state);
      newState.balances = action.payload;
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
