import React from 'react'
import { Dashboard, Footer, Header, TodoForm, TodoList } from './index'
import { DataContextProvider } from './../context/dataContext'
import { ThemeContextProvider } from './../context/themeContext'

export default function TodoApp() {
    return (
        <div>
            <DataContextProvider>
                <ThemeContextProvider>
                    <Header />
                    <Dashboard />
                    <TodoForm />
                    <TodoList />
                    <Footer />
                </ThemeContextProvider>
            </DataContextProvider>
        </div>
    )
}
