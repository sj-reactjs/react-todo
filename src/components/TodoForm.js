import React, { useState } from 'react'
// import useValidate from './../hooks/useValidate'
// import useFormData from './../hooks/useFormData'
import { TodoDataContext } from './../context/dataContext'

function TodoForm() {
    const defaultFormData = {
        task: "",
        description: '',
        status: ''
    }

    // const validationRule = [
    //     {
    //         field: 'task',
    //         validation: {
    //             required: "Field is required"
    //         }
    //     },
    //     {
    //         field: 'description',
    //         validation: {
    //             required: "Field is required"
    //         }
    //     },
    //     {
    //         field: 'status',
    //         validation: {
    //             required: "Field is required"
    //         }
    //     }
    // ]

    // const [isValid, setValid] = useState(false)
    const [form, setForm] = useState(defaultFormData)
    const { add, update, formData, formMode: stage, setStage } = React.useContext(TodoDataContext)
    const formRef = React.useRef()
    // const [todoForm, setTodoForm] = useFormData()
    // const violation = useValidate(validationRule, form);
    // console.log(isValid)

    // React.useEffect(() => {
    //     setValid(violation)
    // }, [violation])

    React.useEffect(function handleFormEffect() {
        // if (stage === 'edit') {
        setForm(state => ({
            ...state,
            ...formData
        }))
        // setTodoForm(form)
        // }
    }, [formData, setForm])

    function submitHandler(e) {
        e.preventDefault()
        if (stage === 'add') {
            add({
                "id": (new Date()).getTime(),
                "created_on": "",
                "last_updated_on": "",
                ...form
            })
        } else if (stage === 'edit') {
            update(form)
            setStage('')
        }

        setForm(defaultFormData)
        // formRef.current.reset()
    }

    function changeHandler({ target }) {
        const { name, value } = target
        setForm(state => ({ ...state, [name]: value }))
        // setTodoForm(state => ({ ...state, [name]: value }))
    }

    return (
        <div>
            {/* <form ref={formRef} onChange={changeHandler} onSubmit={submitHandler}> */}
            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <div>
                        <label htmlFor="task">Task</label>
                    </div>
                    <input value={form?.task} id="task" onChange={changeHandler} placeholder="Enter Task" name="task" type="text" />
                </div>
                <div>
                    <div>
                        <label htmlFor="description">Description</label>
                    </div>
                    <input value={form?.description} onChange={changeHandler} id="description" placeholder="Description" name="description" />
                </div>
                <div>
                    <div>
                        <label htmlFor="status">Status</label>
                    </div>
                    <select name="status" id="status" value={form?.status} onChange={changeHandler}>
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
