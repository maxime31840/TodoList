import { useState } from "react";
import { Trash2, CheckCircle, Edit } from "lucide-react";

export default function Content() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t))
    );
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editText;
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-slate-500">
      <div className="w-full max-w-sm p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-center mb-3">My LIST</h1>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Add a Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 text-sm border rounded-md"
          />
          <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
            Add
          </button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className={`flex justify-between items-center bg-gray-100 p-2 my-1 rounded-md shadow-sm ${t.completed ? 'line-through text-gray-500' : ''}`}
            >
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-1 text-sm border rounded-md"
                />
              ) : (
                <span className="text-sm">{t.text}</span>
              )}
              <div className="flex gap-2">
                {editingIndex === index ? (
                  <button onClick={() => saveEdit(index)} className="text-green-500 text-sm">✔</button>
                ) : (
                  <>
                    <button onClick={() => toggleComplete(index)} className="text-green-500 text-sm">
                      <CheckCircle />
                    </button>
                    <button onClick={() => startEditing(index)} className="text-blue-500 text-sm">
                      <Edit />
                    </button>
                    <button onClick={() => removeTask(index)} className="text-red-500 text-sm">
                      <Trash2 />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
