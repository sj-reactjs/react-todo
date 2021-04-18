import { render, screen } from '@testing-library/react'
import { TodoForm } from './../index'
import { ThemeContextProvider } from './../../context/themeContext'
import { DataContextProvider } from './../../context/dataContext'


describe(`Footer component`, () => {

    it(`render`, () => {
        const { asFragment, container } = render(
            <DataContextProvider>
                <ThemeContextProvider>
                    <TodoForm />
                </ThemeContextProvider>
            </DataContextProvider>
        )
        expect(asFragment()).toMatchSnapshot()

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