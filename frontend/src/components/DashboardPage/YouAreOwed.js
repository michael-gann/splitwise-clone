const YouAreOwed = ({ balances }) => {
  return (
    <div className="youareowed-main-container">
      {balances.map((entry, idx) => {
        return (
          <div className="you-are-owed-container" key={idx}>
            <div>{entry.name}</div>
            <div>{`owes you $${entry.balance}.00`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default YouAreOwed;
