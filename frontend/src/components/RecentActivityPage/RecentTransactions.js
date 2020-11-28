// import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./RecentActivity.css";

// import * as transactionActions from "../../store/transaction";

const RecentTransactions = ({ txn }) => {
  const user = useSelector((state) => state.session.user);

  if (!txn) {
    return null;
  }

  return (
    // go through and add divs around amounts to change color to red or green for owe or owed
    <>
      <div>
        {txn.map((userTxn, idx) => {
          return userTxn.amount > 0 && userTxn.createdBy !== user.username ? (
            <div key={idx}>{`${userTxn.createdBy} added ${
              userTxn.title
            } and you get back $${userTxn.amount.toFixed(2)}`}</div>
          ) : (
            <div key={idx}>{`${
              user.username !== userTxn.createdBy
                ? userTxn.createdBy + " added"
                : "you added"
            } ${userTxn.title} and you ${
              userTxn.amount < 0 ? "owe" : "get back"
            } $${
              userTxn.amount < 0
                ? -userTxn.amount.toFixed(2)
                : userTxn.amount.toFixed(2)
            }`}</div>
          );
        })}
      </div>
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
