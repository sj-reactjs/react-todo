import React from 'react'
import { ThemeContext } from './../context/themeContext'

export function Logo(props) {
    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="react-todo-app" data-todo-type="header-logo" />
        </>
    )
}

export function Search(props) {
    return (
        <>
            <input type="text" placeholder="Search" />
            <i className="fa fa-search"></i>
        </>
    )
}

function Header() {
    const { theme, changeTheme } = React.useContext(ThemeContext)
    const themeClass = theme === 'dark' ? 'fa-sun-o' : 'fa-moon-o'
    return (
        <header className="header">
            <span className="logo"><Logo /></span>
            <span className="search-section">
                <Search />
                <button onClick={changeTheme}>Switch To <i className={`fa ${themeClass}`}></i></button>
            </span>
        </header>
    )
}

export default Header
