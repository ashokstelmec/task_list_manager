import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
// import Dialog from "./Dialog";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const AUTH_TOKEN = "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a";

const TaskList = () => {
  const [taskLists, setTaskLists] = useState([]);
  const [open, setOpen] = useState(false);

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
      console.log(data);
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
      {taskLists?.map((el, i) => (
        <table key={i} className="displaying-data">
          <tbody>
            <tr className="table-row">
              <td className="message-data">{el.message}</td>
              <td>{el.assigned_name}</td>
              <td>{el.priority}</td>
              <td className="creating-date">{el.created_on}</td>
              <td className="edit-icon">
                <FiEdit />
              </td>
              <td className="delete-icon">
                <MdOutlineDelete onClick={() => handleDelete(el.id)} />
              </td>
            </tr>
          </tbody>
        </table>
      ))}
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          modal: "customModal",
        }}
        center
      >
        <p className="create-task">Create/Edit Task</p>
        <form>
          <input
            type="text"
            placeholder="Enter Your Message"
            className="enter-your-message"
          />
          <div className="dropdown">
            <div className="dropdown-1">
              <label>Assign To</label>
              <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div className="dropdown-1">
              <label>priority</label>
              <select>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
          <div className="date-group">
            <label>Due Date</label>
            <input type="date" />
          </div>
          <button className="btn-add-task">Add Task</button>
        </form>
      </Modal>
    </div>
  );
};

export default TaskList;
