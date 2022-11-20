import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './assets/styles/app.css';
import './assets/styles/colors.css'
import { MainCard } from './components/MainCard';
import { ThemeWidget } from './components/ThemeWidget';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const localStorageTheme = localStorage.getItem("theme");
  //Getting localstorage saved theme, if empty,
  //by default light theme will be passed
  const [theme, setTheme] = useState(localStorageTheme || "light");
  //Context without state don't work as state management
  //so here I'm creating a theme state and passing it as
  //context value that will be provided to all children

  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <main className={`app-container ${theme}`}>
        <ThemeWidget />
        <MainCard />
      </main>
    </ThemeContext.Provider>
  );
}

export { App };
