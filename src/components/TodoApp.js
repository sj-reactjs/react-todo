import React from 'react'
import { Dashboard, Footer, Header, TodoForm, TodoList } from './index'
import { DataContextProvider } from './../context/dataContext'
import { ThemeContextProvider } from './../context/themeContext'
import TodoContainer from './TodoContainer'

export default function TodoApp() {
    return (
        <div>
            <DataContextProvider>
                <ThemeContextProvider>
                    <Header />
                    <Dashboard />
                    <TodoForm />
                    <TodoContainer />
                    <TodoList />
                    <Footer />
                </ThemeContextProvider>
            </DataContextProvider>
        </div>
    )
}
