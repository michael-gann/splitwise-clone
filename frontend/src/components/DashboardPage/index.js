import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import "./DashboardPage.css";

import * as transactionActions from "../../store/transaction";
import YouAreOwed from "./YouAreOwed";
import YouOwe from "./YouOwe";
import AddExpenseModal from "./AddExpenseModal";
import FriendView from "../FriendView/index";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const data = useSelector((state) => state.balances);
  const [oweSum, setOweSum] = useState(0);
  const [owedSum, setOwedSum] = useState(0);
  const [oweArr, setOweArr] = useState([]);
  const [owedArr, setOwedArr] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [owe, setOwe] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [owed, setOwed] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    return dispatch(transactionActions.balances());
  }, [dispatch, count]);

  useEffect(() => {
    let owe = {};
    let owed = {};

    let owedArr;
    let oweArr;

    let balances;
    let users;

    let oweSum;
    let owedSum;

    const populateData = () => {
      if (data.balances) {
        balances = data.balances.balancesByUserId;
        users = data.balances.usersById;

        for (let userId in balances) {
          if (balances[userId] < 0) {
            owe[userId] = {
              balance: balances[userId],
              name: users[userId].username,
            };
          }
          if (balances[userId] > 0) {
            owed[userId] = {
              balance: balances[userId],
              name: users[userId].username,
            };
          }
        }

        oweArr = Object.values(owe);
        owedArr = Object.values(owed);

        if (oweArr) {
          oweSum = oweArr.reduce((sum, el) => sum + el.balance, 0);
        }
        if (owedArr) {
          owedSum = owedArr.reduce((sum, el) => sum + el.balance, 0);
        }
      }
    };
    populateData();
    setOwe(owe);
    setOwed(owed);
    setOweSum(oweSum);
    setOwedSum(owedSum);
    setOweArr(oweArr);
    setOwedArr(owedArr);
  }, [data.balances]);

  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <div className="dashboard-wrapper">
      <div className="friend-view">
        <FriendView></FriendView>
      </div>
      <div className="dashboard-container">
        <div className="title-container">
          <div></div>
          <div className="dashboard-title">Dashboard</div>
          <div className="button-container">
            <AddExpenseModal setCount={setCount} count={count} />
          </div>
        </div>
        <div className="balances-container">
          <div className="totals-container">
            <div>Total balance</div>
            <div
              className={`${owedSum + oweSum > 0 ? "positive" : "negative"}`}
            >{`$${(owedSum + oweSum > 0
              ? owedSum + oweSum
              : -(owedSum + oweSum)
            ).toFixed(2)}`}</div>
          </div>
          <div className="totals-container">
            <div>You owe</div>
            <div
              className={`${-oweSum > 0 ? "negative" : "positive"}`}
            >{`$${(-oweSum).toFixed(2)}`}</div>
          </div>
          <div className="totals-container">
            <div>You are owed</div>
            <div className={`${owedSum > 0 ? "positive" : "negative"}`}>{`$${
              owedSum ? owedSum.toFixed(2) : owedSum
            }`}</div>
          </div>
        </div>
        <div className="owe-or-owed-container">
          <div className="owe">YOU OWE</div>
          <div className="owed">YOU ARE OWED</div>
        </div>
        <div className="list-detail-container">
          <YouOwe balances={oweArr}></YouOwe>
          <YouAreOwed balances={owedArr}></YouAreOwed>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
