import { fetch } from "./csrf";

const GET_BALANCES = "transactions/balances";
const GET_ACTIVITY = "transactions/activity";
const GET_ALL = "transactions/all";

const getBalances = (balances) => {
  return {
    type: GET_BALANCES,
    payload: balances,
  };
};

const getActivity = (activity) => {
  return {
    type: GET_ACTIVITY,
    payload: activity,
  };
};

const getAll = (all) => {
  return {
    type: GET_ALL,
    payload: all,
  };
};

export const balances = () => async (dispatch) => {
  const res = await fetch("/api/transactions/balances");
  dispatch(getBalances(res.data));

  return res;
};

export const recentActivity = () => async (dispatch) => {
  const res = await fetch("/api/transactions/activity");
  dispatch(getActivity(res.data));

  return res;
};

export const allExpenses = () => async (dispatch) => {
  const res = await fetch("/api/transactions/all");
  dispatch(getAll(res.data));

  return res;
};

const transactionReducer = (
  state = { balances: null, activity: null, all: null },
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
    case GET_ACTIVITY:
      newState = Object.assign({}, state);
      newState.activity = action.payload;
      // console.log("state", newState);
      // console.log("action", action.payload);
      return newState;
    case GET_ALL:
      newState = Object.assign({}, state);
      newState.all = action.payload;
      return newState;
    default:
      return state;
  }
};

export default transactionReducer;
