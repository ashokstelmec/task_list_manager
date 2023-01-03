import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import { AUTH_TOKEN } from "../utils";
import Task from "./Task";

const TaskList = () => {
  const [taskLists, setTaskLists] = useState([]);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({
    message: "",
    dueDate: "",
    assignedTo: "",
    priority: "",
  });

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
      setTaskLists(data?.tasks);
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  useEffect(() => {
    getTasksLists();
  }, []);

  const handleDelete = async (id) => {
    try {
      const formdata = new FormData();
      formdata.append("taskid", id);

      const requestOptions = {
        method: "POST",
        headers: {
          AuthToken: AUTH_TOKEN,
        },
        body: formdata,
        redirect: "follow",
      };

      await fetch("https://devza.com/tests/tasks/delete", requestOptions);

      getTasksLists();
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  const handleChange = (e) => {
    setTask((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
  };

  const addNewTask = async () => {
    try {
      const formdata = new FormData();
      formdata.append("message", task.message);
      formdata.append("due_date", task.dueDate);
      formdata.append("priority", task.priority);
      formdata.append("assigned_to", task.assignedTo);

      const requestOptions = {
        method: "POST",
        headers: {
          AuthToken: AUTH_TOKEN,
        },
        body: formdata,
        redirect: "follow",
      };

      await fetch("https://devza.com/tests/tasks/create", requestOptions);
      getTasksLists();
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST REQUEST TO BACKEND.
    addNewTask();
  };

  return (
    <div className="task-list container">
      <div className="task-list-header">
        <p className="title">List of Tasks</p>
        <div className="task-list-filter">
          <select>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>

          <button className="add-task-btn" onClick={onOpenModal}>
            <i className="fa fa-plus"></i> Add Task
          </button>
        </div>
      </div>
      {taskLists?.map((taskItem, i) => (
        <Task item={taskItem} handleDelete={handleDelete} getTasksLists={getTasksLists} />
      ))}

      <Dialog
        open={open}
        onCloseModal={onCloseModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        task={task}
      />
    </div>
  );
};

export default TaskList;
