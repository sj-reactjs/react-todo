import { render, screen } from '@testing-library/react'
import { TodoItem } from './../TodoItem'

describe(`Footer component`, () => {
    const props = {
        id: 1,
        task: 'test',
        description: 'description',
        status: 'in-progress',
        created_on: '',
        last_updated_on: '',
        remove: jest.fn(),
        setStage: jest.fn()
    }
    it(`render`, () => {
        const { asFragment } = render(<TodoItem {...props} />)
        expect(asFragment()).toMatchSnapshot()
        const editButton = screen.getByText(/edit/i)
        const removeButton = screen.getByText(/x/i)
        editButton.click()
        removeButton.click()
    })
})