import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { styled, TextField, Typography,Avatar, Stack, ButtonGroup, Button } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React from 'react';


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    })

const UserBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    gap: "10px"
   
    })



const Add = () => {
    const [open,setOpen] = useState(false)
    const ToogleOpen = () => setOpen(true)
  return (
    <>
<Tooltip onClick={ToogleOpen} sx={{position: "fixed", bottom: "20px", left: {xs: "calc(50% - 25px)", md:"55px" }}} title="Add">
<Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={(e) => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280}  bgcolor={"background.default"} color={"text.primary"} p={5} borderRadius="5px" >
    <Typography variant='h6' color="gray" textAlign="center" >Create post</Typography>
    <UserBox>
    <Avatar sx={{width: "30px", height: "30px"}} src="" />
    <Typography variant="h5" >Miro Belak</Typography>
    <TextField
          sx={{width: "100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Write something..."
          variant="standard"
        />
    </UserBox>
    <Stack direction="row" gap={1} mt={2} mb={2} >
        <EmojiEmotionsIcon color="success" />
        <EmojiEmotionsIcon color="error"/>
        <EmojiEmotionsIcon sx={{color: "yellow" }}/>
        <EmojiEmotionsIcon sx={{color: "pink" }}/>
    </Stack>
    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
  <Button>Post</Button>
  <Button  sx={{width: "100px"}} ><DateRangeIcon/></Button>
</ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add