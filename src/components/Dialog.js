import { useEffect, useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { AUTH_TOKEN } from "../utils";

const Dialog = ({ open, onCloseModal, handleChange, handleSubmit, task }) => {
  const [users, setUsers] = useState([]);

  const getUserList = async () => {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          AuthToken: AUTH_TOKEN,
        },
        redirect: "follow",
      };

      const response = await fetch(
        "https://devza.com/tests/tasks/listusers",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      //   setUsers(data);
    } catch (error) {
      console.log("Error is ", error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
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
          name="message"
          placeholder="Enter Your Message"
          className="enter-your-message"
          value={task.message}
          onChange={handleChange}
        />
        <div className="dropdown">
          <div className="dropdown-1">
            <label>Assign To</label>
            <select
              name="assignedTo"
              value={task.assignedTo}
              onChange={handleChange}
            >
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              <option value="d">D</option>
              <option value="e">E</option>
              <option value="f">F</option>
              {/* {users.map((user) => (
                <option>{user}</option>
              ))} */}
            </select>
          </div>
          <div className="dropdown-1">
            <label>priority</label>
            <select
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </select>
          </div>
        </div>
        <div className="date-group">
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        <button className="btn-add-task" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </Modal>
  );
};

export default Dialog;
