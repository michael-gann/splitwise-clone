import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";

import "./DashboardPage.css";

import * as transactionActions from "../../store/transaction";
import YouAreOwed from "./YouAreOwed";
import YouOwe from "./YouOwe";
import AddExpenseModal from "./AddExpenseModal";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.balances);
  const [oweSum, setOweSum] = useState(0);
  const [owedSum, setOwedSum] = useState(0);
  const [oweArr, setOweArr] = useState([]);
  const [owedArr, setOwedArr] = useState([]);
  const [owe, setOwe] = useState({});
  const [owed, setOwed] = useState({});

  useEffect(() => {
    return dispatch(transactionActions.balances());
  }, [dispatch]);

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
        console.log("first balances", balances);
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
          oweSum = oweArr.reduce((accum, el) => accum + el.balance, 0);
        }
        if (owedArr) {
          owedSum = owedArr.reduce((accum, el) => accum + el.balance, 0);
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
    console.log("owe'-----", owe);
    console.log("owed'-----", owed);
    console.log("BALANCES!---------", balances);
  }, [data.balances]);

  // console.log("MY STATE SUM----", oweSum, owedSum, oweArr, owedArr, owe, owed);

  return (
    <div className="wrapper">
      <div className="dashboard-container">
        <div className="title-container">
          <div className="dashboard-title">Dashboard</div>
          <div className="button-container">
            <AddExpenseModal />
            {/* <button className="settle-up">Settle up</button> */}
          </div>
        </div>
        <div className="balances-container">
          <div className="totals-container">
            <div>total balance</div>
            <div className="balance-total">{`$${(owedSum + oweSum).toFixed(
              2
            )}`}</div>
          </div>
          <div className="totals-container">
            <div>you owe</div>
            <div className="owe-total">{`$${(-oweSum).toFixed(2)}`}</div>
          </div>
          <div className="totals-container">
            <div>you are owed</div>
            <div className="owed-total">{`$${owedSum.toFixed(2)}`}</div>
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
