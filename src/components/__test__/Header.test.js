import { act, render, screen } from '@testing-library/react'
import { Header } from './../index'
import { ThemeContextProvider } from './../../context/themeContext'

describe(`Header component`, () => {
    // not getting button text, need to check 
    it.skip(`render`, () => {
        const { asFragment, container } = render(<ThemeContextProvider><Header /></ThemeContextProvider>)
        const themeButton = container.querySelector('button')
        const buttonText = themeButton.innerHTML
        console.log('aa', themeButton.innerText)
        expect(asFragment()).toMatchSnapshot()
        act(() => {
            themeButton.click()
        })
        const themeButtonUpdatedText = themeButton.innerText
        console.log('bb', themeButton.innerText)
        expect(buttonText).not.toEqual(themeButtonUpdatedText)
    })
})