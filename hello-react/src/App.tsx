import React from "react";
import TaskCard from "./TaskCard";

function App(): JSX.Element {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Pending Section */}
        <div className="flex-1 bg-gray-100 rounded-lg p-6 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Pending</h1>
          <div className="space-y-4">
            <TaskCard title="Do the dishes" aname="Puppy" duedate="4.6.2025" />
            <TaskCard title="Make Chicken 65" aname="Mitu" duedate="5.6.2025" />
          </div>
        </div>

        {/* Done Section */}
        <div className="flex-1 bg-gray-100 rounded-lg p-6 shadow-md">
          <h1 className="text-2xl font-bold mb-4">Done</h1>
          <div className="space-y-4">
            <TaskCard title="Make Chicken Curry" aname="Mitu" duedate="3.6.2025" />
            <TaskCard title="Make Chicken Biryani" aname="Puppy" duedate="2.6.2025" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
