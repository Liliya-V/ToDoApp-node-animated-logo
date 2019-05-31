import React, { Component } from 'react'
class TaskInsert extends Component {
    render() {
        return (
            <div className="TaskInsert">
                <p>Add a task to the list</p>
                    <form>
                        <input placeholder="Task" />
                        <button className="addTask" type="submit"> Add Task </button>
                    </form>
            </div>
        )
    }
}
export default TaskInsert;