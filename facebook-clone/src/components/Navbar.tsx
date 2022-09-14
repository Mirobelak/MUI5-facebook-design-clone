import { AppBar,styled, Toolbar, Typography,Box, InputBase, Badge, Avatar, Menu, MenuItem } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "40%",
})
  

const Icons = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
})

const UserBox = styled(Box)({
  display: "flex",
  gap: "10px",
  alignItems: "center",
})



const Navbar = () => {

  const [isOpened, setIsOpened] = useState(false)

  const Toogle = () => {
    setIsOpened(true)
  }

  return (
    <AppBar position="sticky">
    <StyledToolbar>
      <Typography sx={{display: {xs: "none", sm: "block"}, cursor: "pointer"}} variant="h6" >Facebook</Typography>
      <FacebookIcon sx={{display: {xs: "block", sm: "none"}}}/>
      <Search><InputBase placeholder="Search..." /></Search>
      <Icons  sx={{display: {xs: "none", sm: "flex"},cursor: "pointer"}} >
      <Badge badgeContent={4} color="error">
      <MailIcon/>
    </Badge>
    <Badge badgeContent={2} color="error">
      <NotificationsIcon/>
    </Badge>
    <Avatar onClick={Toogle} sx={{width: "30px", height: "30px"}} src="" />
      </Icons>
      <UserBox sx={{display: {xs: "flex", sm: "none"}}}>
      <Avatar onClick={Toogle} sx={{width: "30px", height: "30px"}} src="" />
      <Typography variant="h5" >Miro</Typography>
      </UserBox>
    </StyledToolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isOpened}
        onClose={(e)=>setIsOpened(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar