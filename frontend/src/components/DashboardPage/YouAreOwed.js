const YouAreOwed = ({ balances }) => {
  if (!balances) {
    return null;
  }

  return (
    balances && (
      <div className="youareowed-main-container">
        {balances.map((entry, idx) => {
          return (
            <div className="you-are-owed-container" key={idx}>
              <div>{entry.name}</div>
              <div>{`owes you $${entry.balance.toFixed(2)}`}</div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default YouAreOwed;
