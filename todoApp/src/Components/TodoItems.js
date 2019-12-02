import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTask = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <ol onClick={() => this.delete(item.key)}
            key={item.key}> {item.text}</ol>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}


export default TodoItems;