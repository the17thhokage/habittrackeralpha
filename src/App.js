import React, { useState, useEffect } from 'react';
import './App.css';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';

function App() {
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habitName) => {
    setHabits([
      ...habits,
      {
        id: Date.now(),
        name: habitName,
        completed: false,
        streak: 0,
        lastCompleted: null,
        createdAt: new Date().toISOString()
      }
    ]);
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const today = new Date().toDateString();
        const isCompleting = !habit.completed;
        return {
          ...habit,
          completed: isCompleting,
          streak: isCompleting ? habit.streak + 1 : habit.streak - 1,
          lastCompleted: isCompleting ? today : habit.lastCompleted
        };
      }
      return habit;
    }));
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>✨ Daily Habits Tracker</h1>
          <p className="header-subtitle">Build better habits, one day at a time</p>
        </div>
      </header>
      
      <main className="app-main">
        <HabitForm onAddHabit={addHabit} />
        {habits.length === 0 ? (
          <div className="empty-state">
            <p>No habits added yet. Start by adding a new habit above! 🌱</p>
          </div>
        ) : (
          <HabitList habits={habits} onToggleHabit={toggleHabit} />
        )}
      </main>

      <footer className="app-footer">
        <p>Track your daily progress and build lasting habits</p>
      </footer>
    </div>
  );
}

export default App; 