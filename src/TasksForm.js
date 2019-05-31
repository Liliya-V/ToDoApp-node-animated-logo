import React, { Component } from 'react'
import checkbox from './checkbox.svg';

class TasksForm extends Component {
    render() {
        return (
            <div className="todo">
                <p>Tasks To Do</p>
                <ul>
                    <li>do something</li>
                </ul>
                    <button type="submit"><img src={checkbox} className="checkbox" alt="logo" /></button>
            </div>
        )
    }
}
export default TasksForm;