import { fetch } from "./csrf";

const GET_BALANCES = "transactions/balances";
const GET_ACTIVITY = "transactions/all";

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

export const recentActivity = () => async (dispatch) => {
  const res = await fetch("/api/transactions/activity");
  dispatch(getActivity(res.data));

  return res;
};

export const balances = () => async (dispatch) => {
  const res = await fetch("/api/transactions/balances");
  dispatch(getBalances(res.data));

  return res;
};

const transactionReducer = (
  state = { balances: null, activity: null },
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
    default:
      return state;
  }
};

export default transactionReducer;
