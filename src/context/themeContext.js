import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const { children } = props;
    const defaultTheme = 'dark'
    const [theme, setTheme] = useState(defaultTheme)

    function toggeleTheme() {
        setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme: toggeleTheme
        }}>
            <div className={`todo-app theme-${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }
