import React from 'react'
import { TodoDataContext } from '../context/dataContext'
import { statusList } from '../mock/initial-data'
import { getTodoStats } from './Dashboard'

function TodoContainer() {
    const { todoData } = React.useContext(TodoDataContext)
    const statCards = getTodoStats(todoData)

    return (
        <div className={`card-section-wrapper`}>
            {statusList.map((stat, key) => {
                return (
                    <div>
                        <div className={`card-block`} key={key}>{stat}</div>
                    </div>
                )
            })}
        </ div>
    )
}

export default TodoContainer
