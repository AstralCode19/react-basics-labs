import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)}
            />
        </label>

        <br />

        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)}
            />
        </label>

        <br />

        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)}
            />
        </label>

        <label>
            Priority:
        </label>
        <select name="priority" onChange={(event) => props.change(event)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
        

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
};

export default AddTaskForm;