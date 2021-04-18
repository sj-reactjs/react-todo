
import { render, screen } from '@testing-library/react';
import Dashboard, { getTodoStats } from './../Dashboard'
import { TodoDataContext, DataContextProvider } from './../../context/dataContext'

describe("getStats function testing", () => {
    const data = [{ status: `abc` }, { status: `abc` }, { status: `abcd` }, { status: "" }]

    it(`getStats`, () => {
        const output = { abc: 2, abcd: 1, "no-status": 1 }
        expect(getTodoStats(data)).toStrictEqual(output)
    })
})

// describe("dashboard component test", () => {
//     it(`deasboard component`, () => {
//         const { asFragment } = render(<Dashboard />)
//         expect(asFragment(<DataContextProvider><Dashboard /></DataContextProvider>)).toMatchSnapshot()
//     })
// })