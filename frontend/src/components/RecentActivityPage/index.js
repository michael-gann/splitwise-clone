import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./RecentActivity.css";

import * as transactionActions from "../../store/transaction";
import RecentTransactions from "./RecentTransactions";

const RecentActivityPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.transaction.history);

  useEffect(() => {
    return dispatch(transactionActions.recentActivity());
  }, [dispatch]);

  const getData = () => {
    if (data !== null) {
      const { transactions } = data;
      const { users } = data;
      console.log(transactions, users);
    }
  };

  getData();

  return (
    <div className="main-wrapper">
      <div className="activity-wrapper">
        <div className="recent-activity-title">Recent Activity</div>
        <div className="recent-activity">
          <RecentTransactions></RecentTransactions>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityPage;
