import { useState } from "react";
import { useDispatch } from "react-redux";

import { fetch } from "../../store/csrf";

const AddExpenseForm = ({ onClose }) => {
  const [otherUsers, setOtherUsers] = useState([]);
  const [users, setUsers] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setOtherUsers(users.split(", "));

    const expense = {
      users: otherUsers,
      title: description,
      amount: amount,
      paidBy: paidBy,
      date: date,
    };

    const res = await fetch("/api/transactions/expense", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData: expense }),
    });
  };

  return (
    <form
      className="main-expense-container"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="modal-title-container">
        <div className="add-expense">Add an expense</div>
        <div className="x-close">x</div>
      </div>
      <div className="select-users-container">
        <label>with you and</label>
        <input
          value={users}
          onChange={(e) => setUsers(e.target.value)}
          onBlur={() => setOtherUsers(users.split(", "))}
          type="text"
          placeholder="enter name or email address"
        ></input>
      </div>
      <div className="description-container">
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="enter a description"
        ></input>
        <div className="amount-container">
          <label>$</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            placeholder="0.00"
          ></input>
        </div>
      </div>
      <div className="paid-by-container">
        <div className="paid-by">
          <label>Paid by:</label>
          <input
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
            type="text"
          ></input>
        </div>
        <div>Transaction will be split evenly</div>
        <label></label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        ></input>
      </div>
      <div className="footer-buttons-container">
        <button onClick={() => onClose()}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
