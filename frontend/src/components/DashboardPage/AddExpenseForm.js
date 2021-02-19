import { useState } from "react";
import { useSelector } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import FormErrors from "./FormErrors";

import { fetch } from "../../store/csrf";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: 150,
    maxWidth: 250,
    textAlign: "center",
    backgroundColor: "white",
    fontSize: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    backgroundColor: "white",
    fontSize: 10,
  },
}));

// thank you @Material-UI
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const AddExpenseForm = ({ onClose, setCount, count }) => {
  const classes = useStyles();
  // const [isValidForm, setIsValidForm] = useState(false);

  const [otherUsers, setOtherUsers] = useState([]);
  // const [users, setUsers] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({
    friends: "",
    description: "",
    amount: "",
    paidBy: "",
    date: "",
  });

  const currentUser = useSelector((state) => state.session.user);
  const friends = useSelector((state) => Object.values(state.friends.friends));
  const [paidBy, setPaidBy] = useState(currentUser.username);

  const checkIsValid = (errors) => {
    let isValid = true;
    Object.values(errors).forEach((e) => e.length > 0 && (isValid = false));
    return isValid;
  };

  const inputValidation = () => {
    const errorsCopy = { ...errors };

    if (otherUsers.length < 1) {
      errorsCopy.friends = "You must add at least one friend to the expense";
    } else {
      errorsCopy.friends = "";
    }

    if (!description || description.length <= 3) {
      errorsCopy.description = "Please add a meaningful description";
    } else {
      errorsCopy.description = "";
    }

    if (amount <= 0) {
      errorsCopy.amount = "Please enter a valid amount";
    } else {
      errorsCopy.amount = "";
    }

    if (!date) {
      errorsCopy.date = "Please select a valid date for this expense";
    } else {
      errorsCopy.date = "";
    }

    if (!paidBy) {
      errorsCopy.paidBy = "Someone had to pay for this expense...";
    } else {
      errorsCopy.paidBy = "";
    }

    setErrors(errorsCopy);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("check is valid", checkIsValid(errors));
    if (checkIsValid(errors)) {
      // console.log("submitting for some reason....");
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

      if (res.data.success) {
        setCount(count + 1);
      } else {
        // error handling
        // setErrors(Object.values(res.data.error));
        return null;
      }

      onClose();
    } else {
      return;
    }
  };

  // console.log(errors);

  const handleChange = (e) => {
    setPaidBy(e.target.value);
  };

  const handleOtherUsers = (e) => {
    setOtherUsers(e.target.value);
  };

  // console.log(isValidForm);

  return (
    <form
      className="main-expense-container"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="modal-title-container">
        <div className="add-expense">Add an expense</div>
        {/* <div className="x-close">x</div> */}
      </div>
      <div className="select-users-container">
        <FormErrors errors={errors} />
        <div className="users-container-label">With you and</div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-mutiple-checkbox-label">Friends</InputLabel>
            <Select
              labelId="checkbox-label"
              id="checkbox"
              multiple
              value={otherUsers}
              onChange={handleOtherUsers}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {friends.map((f) => (
                <MenuItem key={f.username} value={f.username}>
                  <Checkbox checked={otherUsers.indexOf(f.username) > -1} />
                  <ListItemText primary={f.username} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
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
          <FormControl className={classes.formControl}>
            <InputLabel id="paid-by-label">Paid by</InputLabel>
            <Select
              labelId="user-who-paid"
              id="user-paid"
              value={paidBy}
              onChange={handleChange}
            >
              <MenuItem value={currentUser.username} key={-1}>
                {currentUser.username}
              </MenuItem>
              {friends.map((f, idx) => (
                <MenuItem key={idx} value={f.username}>
                  {f.username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <input
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
            type="text"
          ></input> */}
        </div>
        <div className="split-evenly">Transaction will be split evenly</div>
        <label></label>
        <input
          className="date-field"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        ></input>
      </div>
      <div className="footer-buttons-container">
        <button className="cancel" onClick={() => onClose()}>
          Cancel
        </button>
        <button onClick={inputValidation} className="save" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
