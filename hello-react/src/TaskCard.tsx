import React from "react";
import './TaskCard.css';

interface TaskCardProps {
  title: string;
  duedate: string;
  aname: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, duedate, aname }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow border">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm">Completed on: {duedate}</p>
      <p className="text-sm">Assignee: {aname}</p>
    </div>
  );
};

export default TaskCard;
