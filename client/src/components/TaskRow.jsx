import React from "react";
import TaskStatusDropdown from "./TaskStatusDropdown";

const TaskRow = ({ task, onDelete, onStatusChange, index }) => {
  return (
    <tr>
      <td className="border border-gray-300 p-2 whitespace-nowrap">{index}</td>
      <td className="border border-gray-300 p-2 truncate max-w-xs">
        {task.name}
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {task.deadline}
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap min-w-[150px]">
        <TaskStatusDropdown
          status={task.status}
          onStatusChange={(status) => onStatusChange(task.id, status)}
        />
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        <button
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
