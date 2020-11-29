const ExpenseDetail = ({ expense, user }) => {
  return (
    <div className="expense-details">
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
          <div className="expense-total">{`$${parseFloat(expense.total).toFixed(
            2
          )}`}</div>
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
  );
};

export default ExpenseDetail;
