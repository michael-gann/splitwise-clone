import { fetch } from "./csrf";

const GET_FRIENDS = "friends/all";

// TODO: create add friend action to properly update state

const getFriends = (friends) => {
  return {
    type: GET_FRIENDS,
    payload: friends,
  };
};

export const friends = () => async (dispatch) => {
  const res = await fetch("/api/friends");
  dispatch(getFriends(res.data));

  return res;
};

const friendReducer = (state = { friends: {} }, action) => {
  let newState;
  switch (action.type) {
    case GET_FRIENDS:
      newState = Object.assign({}, state);
      newState.friends = action.payload;
      return newState;
    default:
      return state;
  }
};

export default friendReducer;
