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
        setStage
    } = props

    return (
        <div role="listitem" className="todo-card">
            <div className="card-actions">
                <div role="button" tabIndex="0" data-action="edit" onClick={() => setStage('edit', id)}>Edit</div>
                <div className="created">
                    <i className="fa fa-clock-o"></i>{created_on !== '' ? created_on : 'N/A'}
                </div>
                <div role="button" tabIndex="0" className="right close" onClick={() => remove(id)}>
                    <i className={`fa fa-trash`}></i>
                </div>
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
