import React, { useState } from 'react'

const ThemeWidget = () => {

  const [theme,setTheme] = useState("light");

  const onThemeChange = () => {
    if(theme==="light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  return (
    <section className='widget-container'>
        <div className={`widget-btn ${theme}`}>
          <button onClick={onThemeChange}>
            {theme==="light"?"L":"D" }
          </button>
        </div>
    </section>
  )
}

export  {ThemeWidget}