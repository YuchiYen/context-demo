import React from 'react'
import useTheme from './useTheme'

export default function Button() {
    const { themeName, setThemeName } = useTheme()
    return (
        <button onClick={() => setThemeName('dark')}>Button our theme is : {themeName} </button>
    )
}
