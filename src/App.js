import { useState } from 'react';
import './assets/styles/app.css';
import './assets/styles/colors.css'
import { MainCard } from './components/MainCard';
import { ThemeWidget } from './components/ThemeWidget';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [theme, setTheme] = useState("light");
  //Context without state don't work as state management
  //so here I'm creating a theme state and passing it as
  //context value that will be provided to all children
  return (
    <main className="app-container">
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <ThemeWidget />
        <MainCard />
      </ThemeContext.Provider>
    </main>
  );
}

export { App };
