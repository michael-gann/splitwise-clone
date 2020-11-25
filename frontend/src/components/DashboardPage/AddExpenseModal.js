import { useState } from "react";
import { Modal } from "../../context/Modal";
import AddExpenseForm from "./AddExpenseForm";

import "./ExpenseModal.css";

function AddExpenseModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="add-expense-button" onClick={() => setShowModal(true)}>
        Add an expense
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddExpenseForm onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default AddExpenseModal;
