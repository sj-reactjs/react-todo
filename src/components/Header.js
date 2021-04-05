import React from 'react'
import { ThemeContext } from './../context/themeContext'

function Header() {
    const { theme, changeTheme } = React.useContext(ThemeContext)
    return (
        <header className="header">
            <button onClick={changeTheme}>Switch To {theme === 'dark' ? `Light` : 'Dark'}</button>
        </header>
    )
}

export default Header
