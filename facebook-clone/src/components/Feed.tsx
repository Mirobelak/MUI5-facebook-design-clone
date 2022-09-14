import {Avatar,Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';import ShareIcon from '@mui/icons-material/Share';
import React from "react";

const data = [{"type":"service","title":"Operation for Infrastructure and Application Layers","content":"Our services include monitoring, regular system maintenance, implementation of various requirements and consultations with our experts in various areas at your request - either technical or operational - about efficiency or recurring issues.","image":"https://zadanie.uniquepeople.sk/data-infrastructure.png"},{"type":"service","title":"IT Architecture and Design Operation","content":"Our team of experienced architects is able to design the complete IT infrastructure architecture up to the database level based on the requirements and demands of the production application(s).","image":"https://zadanie.uniquepeople.sk/app-layers.png"},{"type":"service","title":"Transition & Transformation","content":"We provide our customers with safe and smooth transition through the extensive and complex changes in their infrastructure as well as with complete transfers of their services between subsidiaries in different countries.","image":"https://zadanie.uniquepeople.sk/analytics.png"},{"type":"service","title":"Project Management","content":"During the seven years of our company`s development, our project managers have gained rich experience in managing multiple IT projects, beginning with small transitions, through transfers of complex services, up to large-scale migrations between Datacenters.","image":"https://zadanie.uniquepeople.sk/data-collection.png"},{"type":"service","title":"Software Development","content":"A great team of our skilled project managers, analysts, junior and senior developers and consultants gives our clients the opportunity to assign a specialist to a specific project for a specific time period.","image":"https://zadanie.uniquepeople.sk/software-dev.png"},{"type":"service","title":"HR Services","content":"In cooperation with our major customers and partners, we gained a lot of experience not only in IT services but also in supporting the area of 'Human Resources' and Recruitment.","image":"https://zadanie.uniquepeople.sk/human-resources.png"},{"type":"service","title":"Onsite Support","content":"An essential part of our services in this area is market evaluation. Besides the analysis of the competitive environment, we also check the labor market and we are able to provide recruitment support.","image":"https://zadanie.uniquepeople.sk/support.png"}]

const Feed = () => {

  return (
    <Box flex={4} padding={2} >
      {data.map((item) => 
      (
         <Card key={item.image} sx={{margin: 5}} >
         <CardHeader
           avatar={
             <Avatar src={item.image} sx={{ bgcolor: "blue" }} aria-label="recipe">
               
             </Avatar>
           }
           action={
             <IconButton aria-label="settings">
               <MoreVertIcon />
             </IconButton>
           }
           title={item.type}
           subheader="September 14, 2022"
         />
         <CardMedia
           component="img"
           height="20%"
           image={item.image}
           alt="gym"
         />
         <CardContent>
           <Typography variant="body2" color="text.secondary">
              {item.content}
           </Typography>
         </CardContent>
         <CardActions disableSpacing>
           <IconButton aria-label="add to favorites">
           <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} />
           </IconButton>
           <IconButton aria-label="share">
             <ShareIcon />
           </IconButton>
         </CardActions>
       </Card>))}
    </Box>  )
}

export default Feed