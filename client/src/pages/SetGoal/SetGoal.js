import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import "./style.css";

/**
 * Component for setting and managing learning goals.
 * Allows users to add new goals, specify their levels and deadlines, and delete existing goals.
 * The goals are stored in localStorage to persist across page reloads.
 * 
 * @component
 */
const SetGoal = () => {
  /**
   * State variable for storing the list of goals.
   * Initializes from localStorage or sets to an empty array if no goals are found.
   * 
   * @type {Array<{ text: string, progress: number, deadline: number | null, level: string | null }>}
   */
  const [goals, setGoals] = useState(() => {
    const storedGoals = localStorage.getItem("goals");
    return storedGoals ? JSON.parse(storedGoals) : [];
  });

  /**
   * State variable for the new goal input.
   * 
   * @type {string}
   */
  const [newGoal, setNewGoal] = useState("");

  /**
   * State variable for the deadline input.
   * 
   * @type {string}
   */
  const [deadline, setDeadline] = useState("");

  /**
   * State variable for the level input.
   * 
   * @type {string}
   */
  const [level, setLevel] = useState("");

  /**
   * Effect hook to update localStorage whenever the goals state changes.
   * 
   * @function
   * @param {Array<{ text: string, progress: number, deadline: number | null, level: string | null }>} goals - The current list of goals.
   */
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  /**
   * Function to add a new goal to the list.
   * Resets input fields after adding the goal.
   * 
   * @function
   */
  const addGoal = () => {
    const updatedGoals = [
      ...goals,
      {
        text: newGoal,
        progress: 0,
        deadline: deadline || null,
        level: level || null,
      },
    ];
    setGoals(updatedGoals);
    setNewGoal("");
    setDeadline("");
    setLevel("");
  };

  /**
   * Function to delete a goal by its index.
   * 
   * @function
   * @param {number} index - The index of the goal to be deleted.
   */
  const deleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div className="set-goal-page">
      <section className="set-goal-hero">
        <div className="set-goal-copy">
          <p className="set-goal-eyebrow">Learning Planner</p>
          <h1>Set Goals</h1>
          <p className="set-goal-subtitle">
            Organize your next milestones with a focused plan that matches your
            current level and deadline.
          </p>
        </div>
        <div className="set-goal-stats">
          <div className="stat-card">
            <span className="stat-label">Active goals</span>
            <strong>{goals.length}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Next step</span>
            <strong>{goals.length > 0 ? "Stay consistent" : "Add your first goal"}</strong>
          </div>
        </div>
      </section>

      <section className="set-goal-panel">
        <div className="panel-header">
          <h2>Create a new goal</h2>
          <p>Keep it specific so it is easier to complete.</p>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Enter a learning goal"
          />
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="" disabled>
              Select level
            </option>
            <option value="Foundation">Foundation</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
          </select>
          <select
            value={deadline}
            onChange={(e) => setDeadline(Number(e.target.value))}
          >
            <option value="" disabled>
              Select deadline
            </option>
            {[...Array(5).keys()].map((week) => (
              <option key={week + 1} value={week + 1}>
                {week + 1} week{week > 0 ? "s" : ""}
              </option>
            ))}
          </select>
          <Button type="submit" text="Add Goal" onClick={addGoal} />
        </div>
      </section>

      <section className="goals-section">
        <div className="panel-header">
          <h2>Your goals</h2>
          <p>{goals.length > 0 ? "Track what you are working toward." : "No goals added yet."}</p>
        </div>

        <ul className="goals-list">
          {goals.length === 0 ? (
            <li className="empty-state">
              <span className="empty-state-title">Your goal list is empty</span>
              <span className="empty-state-text">
                Add a learning goal, pick a level, and set a deadline to get started.
              </span>
            </li>
          ) : (
            goals.map((goal, index) => (
              <li key={index} className="goal-item">
                <div className="goal-view">
                  <div className="goal-details">
                    <span className="goal-text">{goal.text}</span>
                    <div className="goal-meta">
                      {goal.level && <span className="goal-pill">{goal.level}</span>}
                      {goal.deadline && (
                        <span className="goal-pill">
                          {goal.deadline} week{goal.deadline > 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    type="button"
                    text="Delete"
                    onClick={() => deleteGoal(index)}
                  />
                </div>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default SetGoal;
