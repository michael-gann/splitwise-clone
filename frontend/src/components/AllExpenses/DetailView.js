import { useState, useEffect } from "react";
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";

import { fetch } from "../../store/csrf";

import * as commentActions from "../../store/comment";

const DetailView = ({ expense, user, tid }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [length, setLength] = useState(0);
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    return dispatch(commentActions.comments());
  }, [dispatch, length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/comments", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData: { comment, transactionId: tid } }),
    });

    const changeLength = () => {
      setComment("");
      setLength(Object.values(comments).length);
    };
    changeLength();
  };

  return (
    <>
      <div className="detail-container">
        <div className="detail-title-container">
          <div className="detail-title">{expense.title}</div>
          <div className="detail-amount">{`$${parseFloat(expense.total).toFixed(
            2
          )}`}</div>
          <div className="createdby">{`Added by ${expense.createdBy} on ${expense.date.month} ${expense.date.day}, ${expense.date.year}`}</div>
        </div>
        <div className="below-title-container">
          <div className="detail-users-container">
            {expense.userShares.map((share) => {
              return (
                <div className="detail-users" key={share.username}>
                  {share.username !== user.username
                    ? `${share.username} owes $${share.amount.toFixed(2)}`
                    : `${share.username} paid $${
                        share.amount
                      } and owes $${parseFloat(share.share).toFixed(2)}`}
                </div>
              );
            })}
          </div>
          <div className="detail-comments-container">
            <Comments comments={comments} transactionId={tid}></Comments>
            <form
              className="comment-form"
              onSubmit={handleSubmit}
              method="post"
            >
              <textarea
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Add a comment"
              ></textarea>
              <button type="sumbit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailView;
