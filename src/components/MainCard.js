import { CircularProgress } from "@mui/material";
import axios from "axios";
import { memo, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useFetchUser } from "../hooks/useFetchUser";
import { UserProfile } from "./UserProfile";
//We are using React.memo to
//prevent unnecessary rendering
//This component will render
//only if they props change
const MainCard = memo(() => {
  const { theme } = useContext(ThemeContext);

  const {user,loading,error} = useFetchUser();

  return (
    <section className="main-card__container">
      <h1 className="theme-mode__title">{theme} mode activated {theme === "light" ? "🌞" : "🌒"}</h1>
      <div className="user-info__area">
        {loading?<CircularProgress/>:
        <UserProfile user={user}/>}
      </div>
    </section>
  )
})
export { MainCard }