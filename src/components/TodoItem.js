import React from 'react'

function TodoItem(props) {
    const {
        id,
        task,
        description,
        status,
        created_on,
        last_updated_on,
        remove,
        update
    } = props

    return (
        <div role="listitem" className="todo-card">
            <div>
                <span className="created">{created_on !== '' ? created_on : 'N/A'}</span>
                <span tabIndex="0" role="button" className="right close" >
                    <span onClick={() => remove(id)}>x</span>
                </span>
            </div>
            <div className="title">
                <h3>{task}</h3>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="status">{status}</div>
            <div className="updated">{last_updated_on !== '' ? last_updated_on : 'N/A'}</div>
        </div>
    )
}

export { TodoItem }
