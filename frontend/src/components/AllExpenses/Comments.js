const Comments = ({ transactionId, comments }) => {
  if (!comments) return null;
  return (
    <>
      <div>
        {comments[transactionId].map((comment) => {
          return (
            <div className="comment-wrapper" key={comment.content}>
              <div className="comment-content">{comment.content}</div>
              <div className="comment-user">{comment.user.username}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
