import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch } from "../../store/csrf";

import * as friendActions from "../../store/friend";
import "./FriendView.css";

import Friend from "./Friend";

const FriendView = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friends.friends);
  const [count, setCount] = useState(0);
  const [friend, setFriend] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    return dispatch(friendActions.friends());
  }, [dispatch, count]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");

    const res = await fetch("/api/friends", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ friend }),
    });

    setFriend("");
    setCount(count + 1);

    if (res.data.success) {
      return;
    } else {
      setErrors(res.data.error);
    }
  };

  return (
    <div className="friend-container">
      <div className="friend-title">Friends</div>
      <Friend friends={friends}></Friend>
      {errors ? <div className="add-friend-error">{errors}</div> : null}
      <div className="add-friend-container">
        <form onSubmit={handleSubmit} method="post" type="submit">
          <label>
            <input
              onChange={(e) => setFriend(e.target.value)}
              value={friend}
              className="add-friend-input"
              placeholder="add a friend..."
            ></input>
          </label>
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default FriendView;
