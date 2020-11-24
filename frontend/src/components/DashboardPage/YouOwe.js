// import { useSelector } from "react-redux";

const YouOwe = ({ balances }) => {
  if (!balances) {
    return null;
  }

  return (
    balances && (
      <div className="you-owe-main-container">
        {balances.map((entry, idx) => {
          return (
            <div className="you-owe-container" key={idx}>
              <div>{`You owe ${entry.name} ${-entry.balance}`}</div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default YouOwe;

//  {values.map((entry, idx) => {
//   <div className="you owe"></div>;
//   if (entry.balance < 0) {
//     <div key={idx}>
//       {`you owe ${entry.name} ${entry.balance}`}
//     </div>;
//   } else {
//     <div key={idx}>
//       {`you do not owe anything`}
//     </div>;
//   }

//   if (entry.balance > 0) {
//     <div className="you-are-owed" key={idx + 1}>
//       <div>{entry.name}</div>
//       <div className="owes-you">{`owes you ${entry.balance}`}</div>
//     </div>;
//   }
//   <></>;
// })}
