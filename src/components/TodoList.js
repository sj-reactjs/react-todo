import React from 'react'
import { TodoDataContext } from './../context/dataContext'
import { TodoItem } from './TodoItem'
function TodoList() {

    const { todoData, remove, setStage } = React.useContext(TodoDataContext)

    return (
        <section role="list">
            <div className="todo-list">
                {todoData.map((todo, index) => <TodoItem key={index} {...todo} remove={remove} setStage={setStage} />)}
            </div>
        </section>
    )
}

export default TodoList
