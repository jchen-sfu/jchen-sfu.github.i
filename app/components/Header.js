import React from 'react'
import { Typography, Box, Grid, Link } from '@mui/material'

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
              padding: 10,
              minHeight: 100,
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
            <Typography variant="body1">
              {"Here is a link to my "}
              <Link href="https://www.overleaf.com/read/gkgvkpjmjjzd#be2279" underline="none">
                {'resume'}
              </Link>
            </Typography>
            <Typography variant="body1">
              {"Here is a link to my favourite game:"}
            </Typography>
            <Link href="https://www.naeu.playblackdesert.com/en-US/Main/Index" underline="none">
              {'PLAY BLACK DESERT'}
            </Link>
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
              src="/profile.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}