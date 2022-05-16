import React from 'react'
import {     Grid,  LinearProgress, List, ListItem,  ListItemText,  Paper, Typography } from '@mui/material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import DomainIcon from '@mui/icons-material/Domain';
import ApartmentIcon from '@mui/icons-material/Apartment';
export default function Skills1() {
  return (
      <Grid container>
        <Grid item sm={12}  className='rightContainer' style={{marginTop:"50px",marginLeft:"0px"}}>
                    <Grid container direction="column">
                        <Grid item>
                            <Grid container direction="row">
                                <Grid item xs={12} sm={6} className='aboutMe'> 
                                    <List dense>
                                        <ListItem>
                                            <Typography align="center" variant="h3" color="#fff" >
                                                About Me
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Programming"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                C++/C , JavaScript 
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Web"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                               NodeJS , React , Express
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Intrest"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                Web Development , Mobile App Development , Big Data , IOT , AI
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Languages"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                English , Hindi , Nepali
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Nationality"
                                            secondary={
                                            <Typography variant="body2" style={{color:"#ddedf0"}}>
                                                Nepali
                                            </Typography>   
                                            }/>
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography align="left" variant="h3" color="#fff" >
                                                Skills
                                    </Typography> 
                                    <List>
                                        <ListItem>
                                            <ListItemText 
                                            primary="HTML , CSS"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="80"/>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="NodeJs"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="45"/>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="React"
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="65"/>   
                                            }/>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText 
                                            primary="Firebase "
                                            secondary={
                                                <LinearProgress style={{height:"8px",borderRadius:"5px"}} variant="determinate" value="35"/>   
                                            }/>
                                        </ListItem> 
                                    </List>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Typography align="center" variant="h3" color="#fff" >
                                Education
                            </Typography> 
                        <Grid items>
                            <Timeline position='alternate'>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <DomainIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="body2">
                                                2009-2015
                                            </Typography>
                                            <Paper elevation={3} className='timelinePaper' >
                                                <Typography variant="h6" component="h1">
                                                Shree Laxmi Higher Secondory School
                                                </Typography>
                                                <Typography>
                                                    Grade X [SLC] - 72.88 % 
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <ApartmentIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                                <Typography variant="body2">
                                                Jan. 2015 - Jan. 2017
                                            </Typography>
                                            <Paper elevation={3} className='timelinePaper'>
                                                <Typography variant="h6" component="h1">
                                                Orchid Higher Secondary School
                                                </Typography>
                                                <Typography>
                                                    Grade XI and XII [NEB] - 70% 
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot>
                                                <SchoolIcon/>
                                            </TimelineDot>
                                            <TimelineConnector/>
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="body2">
                                                July 2018 - present
                                            </Typography>
                                            <Paper elevation={3} className='timelinePaper' >
                                                <Typography variant="h6" component="h1">
                                                Birendra Multiple Campus
                                                </Typography>
                                                <Typography>
                                                    Bsc.CSIT - Average 60% 
                                                </Typography>
                                            </Paper>
                                        </TimelineContent>
                                    </TimelineItem>
                            </Timeline>
                        </Grid>
                    </Grid>
            </Grid>
      </Grid>
  )
}
