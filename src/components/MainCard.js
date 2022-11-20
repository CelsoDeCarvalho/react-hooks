import { memo, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
//We are using React.memo to
//prevent unnecessary rendering
//This component will render
//only if they props change
const MainCard = memo(() => {
  const {theme} = useContext(ThemeContext);
  return (
    <section className="main-card__container">
      <h1 className="theme-mode__title">{theme} mode activated {theme==="light"?"🌞":"🌒"}</h1>
    </section>
 )
})
export { MainCard }