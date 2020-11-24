import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./RecentActivity.css";

import * as transactionActions from "../../store/transaction";

const RecentTransactions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.transaction.history);
  const user = useSelector((state) => state.session.user);

  // const userId = user.id;

  useEffect(() => {
    if (data === null) {
      return dispatch(transactionActions.recentActivity());
    }
  }, [dispatch, data]);

  let activity = {};
  let activityArr = [];

  const getData = () => {
    if (data !== null) {
      const { transactions } = data;
      const { users } = data;

      for (const transaction of transactions) {
        activity[transaction.id] = {
          currentUser: user.username,
          total: transaction.amount / 2,
          title: transaction.title,
          fromUser: users[transaction.from].username,
          toUser: users[transaction.to].username,
          date: transaction.createdAt,
        };
      }

      activityArr = Object.values(activity);
      console.log("activityArr to send to component", activityArr);
      return activityArr;
    }
  };

  getData();

  // console.log(activity);

  return (
    <>
      <div>
        {activityArr.length &&
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
