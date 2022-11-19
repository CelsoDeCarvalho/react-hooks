import './assets/styles/app.css';
import { MainCard } from './components/MainCard';
import { ThemeWidget } from './components/ThemeWidget';

function App() {
  return (
    <main className="app-container">
      <ThemeWidget/>
      <MainCard />
    </main>
  );
}

export { App };
