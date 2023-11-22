import React from 'react'
import { Typography, Box, Grid } from '@mui/material'

export default function Header() {

  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Box
            sx={{
              padding: 15,
              minHeight: 50,
              bgcolor: "#fafafa",
              justifyContent: "right",
            }}
          >
            <Typography variant="h5">
              Hi!
            </Typography>
            <Typography variant="body1">
              {"I'm Jerry. I study, code, and play games. Here is me ->"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              padding: 1,
              bgcolor: "#fafafa",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "30%",
                width: "30%",
              }}
              alt="Jerry Chen"
              src="/graphics/profile.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}