import React, { Component } from "react";
import Tudoitem from "./Tudoitem";

class TodoList extends Component {
  render() {
    const {
      items,
      clearList,
      handleDelete,
      handleEdit,
      emptyValue
    } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Tudo List</h3>
        {emptyValue ? (
          <div class="alert alert-primary">Please Add item</div>
        ) : null}
        {items.map(item => {
          return (
            <Tudoitem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          onClick={clearList}
          type="button"
          className="btn btn-outline-danger mt-5"
        >
          Clear List
        </button>
      </ul>
    );
  }
}

export default TodoList;
