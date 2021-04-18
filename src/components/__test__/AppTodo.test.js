import { act, render, screen } from '@testing-library/react'
import { Header, Dashboard, TodoForm, TodoList, Footer } from './../index'
import { ThemeContextProvider } from './../../context/themeContext'
import { DataContextProvider } from './../../context/dataContext'

describe(`Header component`, () => {
    it(`render`, () => {
        const { asFragment } = render(<DataContextProvider>
            <ThemeContextProvider>
                <Header />
                <Dashboard />
                <TodoForm />
                <TodoList />
            </ThemeContextProvider>
        </DataContextProvider>)
        expect(asFragment()).toMatchSnapshot()
    })
})