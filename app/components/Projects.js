import React from 'react'
import { Typography, Box, List, ListItemText } from '@mui/material'

export default function Projects() {

    return (
        <Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItemText>
                    Project 1
                </ListItemText>
                <ListItemText>
                    Project 1
                </ListItemText>
                <ListItemText>
                    Project 1
                </ListItemText>
                <ListItemText>
                    Project 1
                </ListItemText>
            </List>
        </Box>
    )
}