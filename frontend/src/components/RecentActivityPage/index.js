import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import "./RecentActivity.css";

import * as transactionActions from "../../store/transaction";
import RecentTransactions from "./RecentTransactions";
// import DetailView from "./DetailView";

const RecentActivityPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.balances.activity);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    return dispatch(transactionActions.recentActivity());
  }, [dispatch]);

  // useEffect(() => {
  //   const getData = () => {
  //     if (data) {
  //       console.log(data);
  //     }
  //   };

  //   getData();
  // }, [data]);

  if (!user) return <Redirect to="/" />;

  if (!data) {
    return null;
  }

  return (
    <div className="main-wrapper">
      <div className="activity-wrapper">
        <div className="recent-activity-title">Recent Activity</div>
        <div className="recent-activity">
          <>
            {data.map((userTxn, idx) => (
              <RecentTransactions
                key={idx}
                txn={userTxn}
                user={user}
              ></RecentTransactions>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default RecentActivityPage;
