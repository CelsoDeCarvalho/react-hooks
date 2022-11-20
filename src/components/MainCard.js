import { memo } from "react";
//We are using React.memo to
//prevent unnecessary rendering
//This component will render
//only if they props change
const MainCard = memo(() => {
  console.log("first")
  return (
    <section className="main-card__container">
    </section>
  )
})

export { MainCard }