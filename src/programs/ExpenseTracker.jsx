import { useState } from 'react';
import './ExpenseTracker.css';

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');
  const [description, setDescription] = useState('');

  const categories = ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Other'];

  const addExpense = () => {
    if (amount && description) {
      setExpenses([...expenses, {
        id: Date.now(),
        amount: parseFloat(amount),
        category,
        description,
        date: new Date().toLocaleDateString()
      }]);
      setAmount('');
      setDescription('');
    }
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="expense-container">
      <div className="expense-card">
        <h2>💰 Expense Tracker</h2>
        
        <div className="total-box">
          <span>Total Expenses</span>
          <h3>₹{total.toFixed(2)}</h3>
        </div>

        <div className="expense-form">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={addExpense}>Add Expense</button>
        </div>

        <div className="expenses-list">
          {expenses.length === 0 ? (
            <p className="empty">No expenses yet</p>
          ) : (
            expenses.map(exp => (
              <div key={exp.id} className="expense-item">
                <div className="expense-info">
                  <span className="category-badge">{exp.category}</span>
                  <div>
                    <p className="desc">{exp.description}</p>
                    <p className="date">{exp.date}</p>
                  </div>
                </div>
                <span className="amount">₹{exp.amount.toFixed(2)}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
