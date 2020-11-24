// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import "./RecentActivity.css";

// import * as transactionActions from "../../store/transaction";

const RecentTransactions = () => {
  return (
    <>
      <div>
        {/* {activityArr.length &&
          activityArr.map((transaction, idx) => {
            return transaction.toUser === transaction.currentUser ? (
              <div
                key={idx}
              >{`you added ${transaction.title} and you get back $${transaction.total}.`}</div>
            ) : (
              <div
                key={idx}
              >{`${transaction.toUser} added ${transaction.title} and you owe $${transaction.total}`}</div>
            );
          })} */}
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
