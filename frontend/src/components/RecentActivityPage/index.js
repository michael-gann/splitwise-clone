import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./RecentActivity.css";

import * as transactionActions from "../../store/transaction";
import RecentTransactions from "./RecentTransactions";

const RecentActivityPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.balances.activity);
  const user = useSelector((state) => state.session.user);
  // const [thing, setThing] = useState(0);

  useEffect(() => {
    return dispatch(transactionActions.recentActivity());
  }, [dispatch]);

  useEffect(() => {
    const getData = () => {
      if (data) {
        console.log(data);
      }
    };

    getData();
  }, [data]);

  return (
    <div className="main-wrapper">
      <div className="activity-wrapper">
        <div className="recent-activity-title">Recent Activity</div>
        <div className="recent-activity">
          <RecentTransactions txn={data}></RecentTransactions>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityPage;

// Old Logic

// const [recentData, setRecentData] = useState([]);
// const dispatch = useDispatch();
// const data = useSelector((state) => state.transaction.history);
// const user = useSelector((state) => state.session.user);

// console.log("user info", user);

// const userId = user.id;

// useEffect(() => {
//   if (data === null) {
//     return dispatch(transactionActions.recentActivity());
//   }
// }, [dispatch, data]);

// const usernameChecker = (currentUser, transaction) => {
//   let otherUser;

//   if (transaction.to === currentUser) {
//     otherUser = transaction.from;
//   } else {
//     otherUser = transaction.to;
//   }

//   return otherUser;
// };

// let activityNotUndef;

// useEffect(() => {}, [recentData, data, user.username]);

// console.log("recentData----", recentData);
