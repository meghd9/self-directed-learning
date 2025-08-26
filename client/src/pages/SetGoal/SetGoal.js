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
    <div>
      <h1>SET GOALS</h1>
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
      <ul>
        {goals.map((goal, index) => (
          <li key={index} className="goal-item">
            <div className="goal-view">
              <span>{goal.text}</span>
              {goal.level && <span>{goal.level}</span>}
              {goal.deadline && (
                <span>
                  {goal.deadline} week{goal.deadline > 1 ? "s" : ""}
                </span>
              )}
              <Button type="button" text="Delete" onClick={() => deleteGoal(index)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetGoal;
