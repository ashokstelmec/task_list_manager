import { useEffect, useState } from "react";

const AUTH_TOKEN = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a";

const TaskList = () => {
  const [taskLists, setTaskLists] = useState([]);

  const getTasksLists = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          AuthToken: AUTH_TOKEN,
        },
        redirect: "follow",
      };

      const response = await fetch(
        "https://devza.com/tests/tasks/list",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setTaskLists(data)
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  useEffect(() => {
    getTasksLists();
  }, []);

  return (
    <div className="task-list container">
      <div className="task-list-header">
        <p className="title">List of Tasks</p>
        <div className="task-list-filter">
          <select>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>

          <button className="add-task-btn">
            <i className="fa fa-plus"></i> Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
