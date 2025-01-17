import React from 'react';

function HabitList({ habits, onToggleHabit }) {
  return (
    <div className="habit-list">
      {habits.map(habit => (
        <div key={habit.id} className="habit-item">
          <input
            type="checkbox"
            checked={habit.completed}
            onChange={() => onToggleHabit(habit.id)}
            id={`habit-${habit.id}`}
          />
          <label 
            htmlFor={`habit-${habit.id}`}
            className="habit-name"
          >
            {habit.name}
          </label>
          <div className="habit-streak">
            🔥 {habit.streak} days
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitList; 