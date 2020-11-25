const AddExpenseForm = ({ onClose }) => {
  return (
    <div className="main-expense-container">
      <div className="modal-title-container">
        <div className="add-expense">Add an expense</div>
        <div className="x-close">x</div>
      </div>
      <div className="select-users-container">
        <label>with you and</label>
        <input type="text" placeholder="enter name or email address"></input>
      </div>
      <div className="description-container">
        <input placeholder="enter a description"></input>
        <div className="amount-container">
          <label>$</label>
          <input type="text" placeholder="0.00"></input>
        </div>
      </div>
      <div className="paid-by-container">
        <div className="paid-by">
          <div>paid by</div>
          <select>
            Paid By
            <option></option>
          </select>
        </div>
        <div>Transaction will be split evenly</div>
        <label></label>
        <input type="date"></input>
      </div>
      <div className="footer-buttons-container">
        <button onClick={() => onClose()}>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
