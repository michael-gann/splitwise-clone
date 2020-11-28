import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import DetailView from "./DetailView";

import DetailView from "./DetailView";
import "./RecentActivity.css";

// import * as transactionActions from "../../store/transaction";

const RecentTransactions = ({ txn, user }) => {
  // const user = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const showDetail = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeDetail = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeDetail);

    return () => document.removeEventListener("click", closeDetail);
  }, [showMenu]);

  return (
    // go through and add divs around amounts to change color to red or green for owe or owed
    <>
      {txn.amount > 0 && txn.createdBy !== user.username ? (
        <>
          <div onClick={showDetail} className="recent-activity-items">
            {`${txn.createdBy} added ${
              txn.title
            } and you get back $${txn.amount.toFixed(2)}`}
          </div>
          {showMenu && <DetailView txn={txn}></DetailView>}
        </>
      ) : (
        <>
          <div onClick={showDetail} className="recent-activity-items">
            {`${
              user.username !== txn.createdBy
                ? txn.createdBy + " added"
                : "you added"
            } ${txn.title} and you ${txn.amount < 0 ? "owe" : "get back"} $${
              txn.amount < 0 ? -txn.amount.toFixed(2) : txn.amount.toFixed(2)
            }`}
          </div>
          {showMenu && <DetailView txn={txn}></DetailView>}
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
