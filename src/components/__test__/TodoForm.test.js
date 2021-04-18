import { render, screen, fireEvent } from '@testing-library/react'
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
        fireEvent.change(taskField, { target: { value: 'new description' } })

        const descriptionField = container.querySelector('input[id="description"]')
        fireEvent.change(descriptionField, { target: { value: 'new description' } })

        const selectField = container.querySelector('select[name="status"]')
        fireEvent.change(selectField, { target: { value: 'in-progress' } })

        const submitButton = container.querySelector('button[type="submit"]')
        fireEvent.click(submitButton)

        const cancelButton = container.querySelector('button[type="button"]')
        fireEvent.click(cancelButton)

    })
})