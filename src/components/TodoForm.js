import React from 'react'
import useFormData from './../hooks/useFormData'
import { TodoDataContext } from './../context/dataContext'

function TodoForm() {
    const [todoForm, setTodoForm] = useFormData()
    const formRef = React.useRef()
    const { add } = React.useContext(TodoDataContext)

    function submitHandler(e) {
        e.preventDefault()
        add({
            "id": (new Date()).getTime(),
            "created_on": "",
            "last_updated_on": "",
            ...todoForm
        })
        formRef.current.reset()
    }

    function changeHandler(event) {
        const { name, value } = event.target
        setTodoForm(state => ({ ...state, [name]: value }))
    }

    console.log('form data', todoForm)

    return (
        <div>
            <form ref={formRef} onChange={changeHandler} onSubmit={submitHandler}>
                <div>
                    <div>
                        <label htmlFor="task">Task</label>
                    </div>
                    <input id="task" placeholder="Enter Task" name="task" type="text" />
                </div>
                <div>
                    <div>
                        <label htmlFor="description">Description</label>
                    </div>
                    <textarea id="description" placeholder="Description" name="description" ></textarea>
                </div>
                <div>
                    <div>
                        <label htmlFor="status">Status</label>
                    </div>
                    <select name="status" id="status">
                        <option disabled value="">Select Status</option>
                        <option value="not-start">Not Start</option>
                        <option value="in-progress">In Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => formRef.current.reset()}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm
