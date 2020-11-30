import { useState } from "react";
import DetailView from "./DetailView";

const ExpenseDetail = ({ expense, user, tid }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((show) => !show);
  };

  return (
    <>
      <div className="expense-details">
        <div onClick={handleClick} className="expense-details-inner">
          <div className="date-title-container">
            <div className="date">
              <div className="month">{expense.date.month}</div>
              <div className="day">{expense.date.day}</div>
            </div>
            <div className="title">{expense.title}</div>
          </div>
          <div className="expenses-container">
            <div className="expense-paid-by-container">
              <div className="expense-paid-by">
                {expense.paidBy !== user.username
                  ? `${expense.paidBy} paid`
                  : `you paid`}
              </div>
              <div className="expense-total">{`$${parseFloat(
                expense.total
              ).toFixed(2)}`}</div>
            </div>
          </div>
          <div className="user-info-container">
            {expense.paidBy !== user.username ? (
              <>
                <div className="user-info">{`${expense.paidBy} lent you `}</div>
                <div className="amount">{`$${expense.userShares
                  .find((us) => us.userId === user.id)
                  .amount.toFixed(2)}`}</div>
              </>
            ) : (
              <>
                <div className="user-info">{`you get back `}</div>
                <div className="amount">
                  {`$${expense.userShares
                    .find((us) => us.userId === user.id)
                    .amount.toFixed(2)}`}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {showMenu && (
        <DetailView tid={tid} expense={expense} user={user}></DetailView>
      )}
    </>
  );
};

export default ExpenseDetail;
