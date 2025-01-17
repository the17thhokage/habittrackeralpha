import React, { useState } from 'react';

function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        placeholder="Enter a new habit"
        className="habit-input"
      />
      <button type="submit" className="add-button">Add Habit</button>
    </form>
  );
}

export default HabitForm; 