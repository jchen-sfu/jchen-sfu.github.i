import React from 'react'
import { Typography, Box, List, ListItem, ListItemText, Divider, Link } from '@mui/material'

export default function WorkEx() {

    return (
        <Box>
            <Typography variant="h5">
              WorkEx
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="Safe Software QA Intern"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Link href="https://engage.safe.com/blog/2020/01/local-high-school-work-experience-program-going-full-steam-ahead-student-opportunities/" underline="none">
                                        {"September 2019 - November 2019"}
                                    </Link>
                                </Typography>
                                {" — used Python and FME to automate systems testing of software products, visualize results"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </Box>
    )
}