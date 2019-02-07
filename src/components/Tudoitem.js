import React, { Component } from "react";

class Tudoitem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span onClick={handleEdit} className="mx-2 text-success">
            <i className="fas fa-pen" />
          </span>
          <span onClick={handleDelete} className="mx-2 text-danger">
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default Tudoitem;
