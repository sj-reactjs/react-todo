import React, { createContext, useState } from 'react'
import { defaultData } from './../mock/initial-data'

export const TodoDataContext = createContext()

function DataContextProvider(props) {
    const { children } = props;

    const [todoData, setTodoData] = useState(defaultData)

    function addTodo(todo) {

        setTodoData(currentTodo => {
            return [
                ...currentTodo,
                todo
            ]
        })
    }

    function removeTodo(id) {
        setTodoData(currentTodo => currentTodo.filter(todo => todo.id !== id))
    }

    function updateTodo(updatedTodo) {
        setTodoData(currentTodo => currentTodo.map(todo => {
            if (todo.id === updateTodo.id) {
                return {
                    ...updatedTodo,
                    id: todo.id
                }
            }
            return todo
        }))
    }

    return (
        <TodoDataContext.Provider value={{
            todoData,
            add: addTodo,
            remove: removeTodo,
            update: updateTodo
        }}>
            {children}
        </TodoDataContext.Provider>
    )
}

export { DataContextProvider }
