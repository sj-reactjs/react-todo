import { render, screen } from '@testing-library/react'
import Footer from './../Footer'

describe(`Footer component`, () => {
    it(`render`, () => {
        const { asFragment } = render(<Footer />)
        expect(asFragment()).toMatchSnapshot()
    })
})