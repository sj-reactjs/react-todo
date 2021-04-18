import { act, render, screen } from '@testing-library/react'
import { Header, Dashboard, TodoForm, TodoList, Footer } from './../index'
import { ThemeContextProvider } from './../../context/themeContext'
import { DataContextProvider } from './../../context/dataContext'

describe(`Header component`, () => {
    const component = (<DataContextProvider>
        <ThemeContextProvider>
            <Header />
            <Dashboard />
            <TodoForm />
            <TodoList />
        </ThemeContextProvider>
    </DataContextProvider>)
    it(`render`, () => {
        const { asFragment } = render(component)
        expect(asFragment()).toMatchSnapshot()
    })

    it(`form event`, () => {
        const { container } = render(component)
        const editField = container.querySelector('span[data-action="edit"]')
        editField.click()

        const taskField = container.querySelector('input[id="task"]')
        if (taskField) {
            taskField.innerText = "new field"
        }
        const descriptionField = container.querySelector('input[id="description"]')
        descriptionField.innerText = "new desc"

        const selectField = container.querySelector('select[name="status"]')
        selectField.value = "in-progress"

        const submitButton = container.querySelector('button[type="submit"]')

        if (submitButton) {
            submitButton.click()
        }

        const cancelButton = container.querySelector('button[type="button"]')
        if (cancelButton) {
            cancelButton.click()
        }
    })

})