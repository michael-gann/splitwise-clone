import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./AllExpenses.css";

import * as transactionActions from "../../store/transaction";

import ExpenseDetail from "./ExpenseDetail";

const AllExpenses = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.balances.all);
  const user = useSelector((state) => state.session.user);
  const [dataAll, setDataAll] = useState([]);

  useEffect(() => {
    return dispatch(transactionActions.allExpenses());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setDataAll(data.result);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <div className="all-expenses-container">
        <div className="expenses-title">All Expenses</div>
        <div className="expense-detail">
          {dataAll ? (
            dataAll.map((expense) => (
              <ExpenseDetail
                id="expense-detail"
                key={expense.transactionId}
                tid={expense.transactionId}
                const
                expense={expense}
                user={user}
              ></ExpenseDetail>
            ))
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllExpenses;
