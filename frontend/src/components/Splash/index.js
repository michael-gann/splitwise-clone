import "./Splash.css";

const Splash = () => {
  return (
    <div className="splash-wrapper">
      <div className="intro-text-container">
        <div className="intro-text1">Welcome to Splitease!</div>
        <div className="intro-text2">Tracking expenses couldn't be easier</div>
      </div>
      <div className="splash-description-container">
        <div className="description1">
          <div className="track-balances">View History</div>
          <div>Keep track of who owes who</div>
          <div className="img-container">
            <img
              alt="example site feature"
              src="https://i.imgur.com/fYeXZGs.png"
            ></img>
          </div>
        </div>
        <div className="description2">
          <div className="view-history">Track Balances</div>
          <div>See who you owe and who owes you money</div>
          <div className="img-container">
            <img
              alt="example site feature"
              src="https://i.imgur.com/YItYkuT.png"
            ></img>
          </div>
        </div>
        <div className="description3">
          <div className="track-balances">Comment On Transactions</div>
          <div>Communicate through a transaction you're involved in</div>
          <div className="img-container">
            <img
              alt="example site feature"
              src="https://i.imgur.com/eXOzV36.png"
            ></img>
          </div>
        </div>
        <div className="description4">
          <div className="track-balances">Coming Soon!</div>
          <div>View your expense history with specific friends</div>
          <div className="img-container">
            <img
              alt="example site feature"
              src="https://i.imgur.com/fYeXZGs.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
