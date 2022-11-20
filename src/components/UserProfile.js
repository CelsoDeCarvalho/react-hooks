import { Avatar } from "@mui/material"
import { memo } from "react"

const UserProfile = memo(({ user }) => {
    console.log(user)
    return (
        <div className="user-profile">
            <Avatar alt="Remy Sharp" src={user?.picture?.large}   sx={{ width: 156, height: 156 }}/>
            <span className="theme-mode__title">{user?.name?.first} {user?.name?.last}</span>
            <span className="theme-mode__title">{user?.cell}</span>
        </div>
    )
})

export { UserProfile }