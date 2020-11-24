import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";

import "./DashboardPage.css";

import * as transactionActions from "../../store/transaction";
import YouAreOwed from "./YouAreOwed";
import YouOwe from "./YouOwe";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.balances);
  // const [positiveBalances, setPositiveBalances] = useState([]);
  // const [negativeBalances, setNegativeBalances] = useState([]);

  useEffect(() => {
    dispatch(transactionActions.balances());
  }, [dispatch]);

  let owe = {};
  let owed = {};

  let owedArr;
  let oweArr;

  let balances;
  let users;

  const populateData = () => {
    if (data.balances) {
      balances = data.balances.balancesByUserId;
      users = data.balances.users;
      console.log("balances-----", balances);
      console.log("users-------", users);

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

      console.log(oweArr, owedArr);
    }
  };

  populateData();

  console.log("BALANCES!---------", balances);

  return (
    <div className="wrapper">
      <div className="dashboard-container">
        <div className="title-container">
          <div className="dashboard-title">Dashboard</div>
          <div className="button-container">
            <button>Add an expense</button>
            <button className="settle-up">Settle up</button>
          </div>
        </div>
        <div className="balances-container">
          <div className="totals-container">
            <div>total balance</div>
            <div className="totals">$0.00</div>
          </div>
          <div className="totals-container">
            <div>you owe</div>
            <div className="totals">$0.00</div>
          </div>
          <div className="totals-container">
            <div>you are owed</div>
            <div className="totals">$0.00</div>
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
      {/* {data &&
        data.transactions &&
        values.map((entry, idx) => (
          <div
            key={idx}
          >{`name is ${entry.name} and balance is ${entry.balance} `}</div>
        ))} */}
    </div>
  );
};

export default DashboardPage;

// for (let friendId in balances) {
//   if (balances[friendId].balance > 0) {
//     owed[friendId] = balances[friendId];
//   } else if (balances[friendId].balance < 0) {
//     owe[friendId] = balances[friendId];
//   }
// }

// const sessionUser = useSelector((state) => state.session.user);

// console.log("set positive balances", values);
// setPositiveBalances(values);

// setNegativeBalances(values2);
// console.log("Set Negative Balances", values2);

// values = Object.values(data.transactions);
// console.log("positive balances-----", values);
// console.log("negative balances-----", values2);

// const setTransactions = () => {};

// if (data.transactions) {
//   const balances = data.transactions;

//   for (let key in balances) {
//     if (balances[key].balance > 0) {
//       toSetPositiveBalances[key] = balances[key];
//     } else if (balances[key].balance < 0) {
//       toSetNegativeBalances[key] = balances[key];
//     }
//   }
//   const values = Object.values(toSetPositiveBalances);
//   const values2 = Object.values(toSetNegativeBalances);
//   if (positiveBalances === []) {
//     setPositiveBalances(values);
//     console.log("1------", values);
//   }
//   if (negativeBalances === []) {
//     setNegativeBalances(values2);
//     console.log("2-------", values2);
//   }

// values = Object.values(data.transactions);
// console.log("positive balances-----", values);
// console.log("negative balances-----", values2);
// }

// useEffect(() => {
//   const populateData = async () =>
//     await dispatch(transactionActions.transactions());
//   populateData();
// }, []);

// if (data && data.transaction) {
//   console.log("data-------------------    ", data);
//   let values = Object.values(data.transaction);
//   console.log("array of values -----", values);
// }

// if (toAndFrom && toAndFrom.transactions) {
//   const digest = toAndFrom.transactions;
//   const users = digest.users;
//   const transactions = digest.transactions;

// console.log("digest", digest);
// console.log("users", users);
// console.log("transactions", transactions);

// let amount = {};

//   for (const transaction of transactions) {
//     const fromUser = users[transaction.from];
//     const toUser = users[transaction.to];

//     const transactionAmount = transaction.amount;

//     amount[fromUser] = transactionAmount;

//     console.log("fromUser", fromUser);
//     console.log("toUser", toUser);
//     console.log(amount);
//   }
// }

// const [owed, setOwed] = useState([]);
// const [owe, setOwe] = useState([]);
// const [transactionList, setTransactionList] = useState([]);
// const user = useSelector((state) => state.session.user);
// const toAndFrom = useSelector((state) => state.transaction);

// return dispatch(transactionActions.transactions());
// console.log(transactions);

//function to sum to value
//function to sum from value

//function to find who to and from are from database - users.

// console.log("after dispatch");

// console.log("declaring balances");
// const balances = data.transactions;

// let toSetNegativeBalances = {};
// let toSetPositiveBalances = {};

// console.log("before loop");
// for (let key in balances) {
//   console.log("inside for loop");
//   if (balances[key].balance > 0) {
//     toSetPositiveBalances[key] = balances[key];
//   } else if (balances[key].balance < 0) {
//     toSetNegativeBalances[key] = balances[key];
//   }
// }

// console.log("outside for loop");
// const values = Object.values(toSetPositiveBalances);
// const values2 = Object.values(toSetNegativeBalances);

// console.log("values", values);
