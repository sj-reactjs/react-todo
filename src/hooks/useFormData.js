import { useState, useEffect } from "react";
const useFormData = () => {
    const [todoForm, setTodoForm] = useState({})

    // useEffect(() => {
    //     setTodoForm(formState => {
    //         return {
    //             ...formState,
    //             [name]: value
    //         }
    //     })
    // }, [name, value])

    return [todoForm, setTodoForm]
}

export default useFormData
