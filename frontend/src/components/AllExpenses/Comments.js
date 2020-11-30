const Comments = ({ transactionId, comments }) => {
  return (
    <>
      <div>
        {comments &&
          Object.values(comments).map((comment) => {
            return (
              <>
                <div className="comment-content">
                  {comment.transactionId === transactionId
                    ? `${comment.content}`
                    : null}
                </div>
                <div>
                  {comment.transactionId === transactionId
                    ? `${comment.user.username}`
                    : null}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Comments;
