import React, { createContext, useState } from 'react'
import { defaultData } from './../mock/initial-data'

export const TodoDataContext = createContext()

function DataContextProvider(props) {
    const { children } = props;

    const [todoData, setTodoData] = useState(defaultData)
    const [formMode, setformMode] = useState('add')
    const [formData, setFormData] = useState({})

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
        setTodoData((currentTodo) => {
            return currentTodo.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return {
                        ...todo,
                        ...updatedTodo,
                    }
                }
                return todo
            })
        })
    }

    function setFormStage(stage = 'add', todoId) {
        switch (stage) {
            case 'edit':
                const itemToEdit = todoData.filter(({ id }) => `${todoId}` === `${id}`)
                if (itemToEdit.length) {
                    setformMode('edit')
                    setFormData(itemToEdit[0])
                }
                break;
            default:
                setformMode('add')
                setFormData({})
                break;
        }
    }

    return (
        <TodoDataContext.Provider value={{
            formMode,
            formData,
            todoData,
            add: addTodo,
            remove: removeTodo,
            update: updateTodo,
            setStage: setFormStage
        }}>
            {children}
        </TodoDataContext.Provider>
    )
}

export { DataContextProvider }
