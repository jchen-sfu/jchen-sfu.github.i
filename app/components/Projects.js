import React from 'react'
import { Typography, Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Link } from '@mui/material'

export default function Projects() {

    return (
        <Box
            padding={2}
        >
            <Typography variant="h5">
                Projects
            </Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="LOGO" src="/NEXT_LOGO.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Website"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Link href="https://github.com/jchen-sfu/jchen-sfu.github.io" underline="none">
                                        {"Github"}
                                    </Link>
                                </Typography>
                                {" - Created a personal website for a school project using React, next.js React framework"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="LOGO" src="/FLIGHTRADAR24_LOGO.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Flight Radar "
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Link href="https://github.com/kcccr123/FlightBrowse" underline="none">
                                        {"Github"}
                                    </Link>
                                </Typography>
                                {" - used SQLite in Python to store data from API calls to FlightRadar24, then read from database to C++ program."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="LOGO" src="/COREAPI_LOGO.png" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Scholar Sprint"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Link href="https://github.com/the-pirated-sardar/1Sky-Project-276" underline="none">
                                        {"Github"}
                                    </Link>
                                </Typography>
                                {" - React project with search and summarization feautures for academic papers. Makes calls to Core API for resources and implements GPT API for summary features."}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Box>
    )
}