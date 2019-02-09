import React, { Component } from "react";
import uuid from "uuid";
import TudoList from "./components/TodoList";
import TudoListInput from "./components/TudoListInput";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
    emptyValue: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    if (this.state.item === "") {
      this.setState({
        emptyValue: true
      });
    } else {
      const updateItem = [...this.state.items, newItem];

      this.setState({
        items: updateItem,
        item: "",
        id: uuid(),
        editItem: false,
        emptyValue: false
      });
    }
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItem = this.state.items.filter(item => {
      return item.id !== id;
    });

    this.setState({
      items: filteredItem
    });
  };
  handleEdit = id => {
    const filteredItem = this.state.items.filter(item => {
      return item.id !== id;
    });

    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo List</h3>
              <TudoListInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                clearList={this.clearList}
                editItem={this.state.editItem}
                emptyValue={this.state.emptyValue}
              />
              <TudoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
