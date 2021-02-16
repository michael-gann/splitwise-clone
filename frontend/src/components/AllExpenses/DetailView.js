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
    await fetch("/api/comments", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData: { comment, transactionId: tid } }),
    });

    const changeLength = () => {
      setComment("");
      if (comments) {
        setLength(Object.values(comments).length);
      }
    };
    changeLength();
  };
  // console.log(expense.userShares);
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
                <>
                  {expense.paidBy === share.username ? (
                    <div
                      className="detail-users"
                      key={expense.transactionId + share.username}
                    >
                      {`${expense.paidBy} paid  $${parseFloat(
                        expense.total
                      ).toFixed(2)} and owes $${
                        share.share
                          ? parseFloat(share.share).toFixed(2)
                          : share.amount.toFixed(2)
                      }`}
                    </div>
                  ) : (
                    <div className="detail-users" key={expense.transactionId}>
                      {expense.paidBy === user.userName
                        ? `${expense.paidBy} owes $${share.amount.toFixed(2)}`
                        : `${share.username} owes $${share.amount.toFixed(2)}`}
                      {/* {share.username !== user.username
                    ? `${user.username} owes $${share.amount.toFixed(2)}`
                    : `${expense.paidBy} paid $${expense.total} and owes
                      $${parseFloat(share.share).toFixed(2)}`} */}
                    </div>
                  )}
                </>
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
