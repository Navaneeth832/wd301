import React from 'react';

function TaskCard({ title, assigneeName, dueDate, completedAtDate }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      {assigneeName && <p>Assignee: {assigneeName}</p>}
      {dueDate && <p>Due on: {dueDate}</p>}
      {completedAtDate && <p>Completed on: {completedAtDate}</p>}
    </div>
  );
}

export default TaskCard;
