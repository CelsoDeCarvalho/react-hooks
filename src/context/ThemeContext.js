import {createContext} from "react";

//Creating a context
const ThemeContext = createContext();

//The ThemeProvider will provide value
//for all children
const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider>
        {children}
    </ThemeContext.Provider>
  )
}

export  {ThemeProvider,ThemeContext}