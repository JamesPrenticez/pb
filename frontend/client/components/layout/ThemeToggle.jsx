import React, { useEffect, useState } from "react"
import useDarkSide from "../../hooks/useDarkSide"
import { SunIcon, MoonIcon } from "../../icons/theme"

const ThemeToggle = () => {
  const [colorTheme, setTheme] = useDarkSide()
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false)

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

	return (
		<>
      {colorTheme === 'dark' ? (
        <button onClick={() => toggleDarkMode()}>
          <SunIcon className="h-6 md:inline-flex cursor-pointer transform transition-all hover:scale-110 duration-150 ease-out" />
        </button> 
        ) : (
        <button onClick={() => toggleDarkMode()}>
          <MoonIcon className="h-6 md:inline-flex cursor-pointer transform transition-all hover:scale-110 duration-150 ease-out" />
        </button> 
      )}
		</>
	)
}

export default ThemeToggle