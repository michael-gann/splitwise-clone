import "./RecentActivity.css";

const RecentTransactions = ({ txn, user }) => {
  return (
    // go through and add divs around amounts to change color to red or green for owe or owed
    <>
      {txn.amount > 0 && txn.createdBy !== user.username ? (
        <>
          <div className="recent-activity-items">
            {`${txn.createdBy} added ${
              txn.title
            } and you get back $${txn.amount.toFixed(2)}`}
          </div>
        </>
      ) : (
        <>
          <div className="recent-activity-items">
            {`${
              user.username !== txn.createdBy
                ? txn.createdBy + " added"
                : "you added"
            } ${txn.title} and you ${txn.amount < 0 ? "owe" : "get back"} $${
              txn.amount < 0 ? -txn.amount.toFixed(2) : txn.amount.toFixed(2)
            }`}
          </div>
        </>
      )}
    </>
  );
};

export default RecentTransactions;

// return (
//   transaction.currentUser === transaction.fromUser ? (
//     <div
//     key={idx}
//     className="transaction-details"
//   >{`${transaction.currentUser}, ${transaction.total}, ${transaction.toUser}, ${transaction.fromUser}, ${transaction.date}`}</div>
//   }

// );
