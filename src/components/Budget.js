import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseTotal from "./ExpenseTotal";

const Budget = () => {
  const { Budget , currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(Budget);
  const totalExpenses = ExpenseTotal();
  const handleBudgetchange = (e) => {
    const updatedBudget = e.target.value;
    if (updatedBudget >= totalExpenses) {
      setNewBudget(updatedBudget);
    } else {
      alert("You cannot reduce the budget lower than the spending");
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency} {Budget}</span>
      <input
        type="number"
        className="form-control"
        step="10"
        value={newBudget}
        onChange={handleBudgetchange}
      />
    </div>
  );
};

export default Budget;
