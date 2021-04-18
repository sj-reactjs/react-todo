import React from 'react'
import { TodoDataContext } from './../context/dataContext'

export function getTodoStats(data) {
    const stats = {}
    data.forEach(todo => {
        if (!todo.status && todo.status === '') {
            stats['no-status'] = stats.hasOwnProperty('no-status') ? stats['no-status'] + 1 : 1
        } else {
            stats[todo.status] = stats.hasOwnProperty(todo.status) ? stats[todo.status] + 1 : 1
        }
    })
    return stats
}

function Dashboard() {
    const { todoData } = React.useContext(TodoDataContext)
    const statCards = getTodoStats(todoData)
    return (
        <div className="stats-card">
            {Object.keys(statCards).map((stat, i) => (
                <span className="card" key={i}>
                    <p>{stat}</p>
                    <p>{statCards[stat]}</p>
                </span>
            ))}
        </div>
    )
}

export default Dashboard