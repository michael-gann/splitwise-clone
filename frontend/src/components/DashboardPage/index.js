import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";

import * as transactionActions from "../../store/transaction";

const DashboardPage = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.transaction);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    return dispatch(transactionActions.transactions());
  }, [dispatch]);

  let values;

  if (data.transactions) {
    values = Object.values(data.transactions);
    console.log(data);
  }

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

  return (
    <>
      {data &&
        data.transactions &&
        values.map((entry) => (
          <div
            key={entry.balance}
          >{`name is ${entry.name} and balance is ${entry.balance} `}</div>
        ))}
    </>
  );
};

export default DashboardPage;

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
