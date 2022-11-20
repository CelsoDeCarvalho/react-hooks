import {createContext} from "react";

//Creating a context and initialing with
//ligth theme cuz it will be the default
//theme value
const ThemeContext = createContext("light");

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