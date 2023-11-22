import React from 'react'
import { Typography, Box, Grid, Link } from '@mui/material'

export default function Footer() {

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
                <Grid item xs={4}>
                    <Box
                        sx={{
                            padding: 1,
                            minHeight: 25,
                            bgcolor: "#fafafa",
                            justifyContent: "right",
                        }}
                    >
                        <Typography variant="h5">
                            LinkedIn
                        </Typography>
                        <Link href="https://www.linkedin.com/in/jc-ca/" underline="none">
                            {'https://www.linkedin.com/in/jc-ca/'}
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            padding: 1,
                            minHeight: 25,
                            bgcolor: "#fafafa",
                            justifyContent: "right",
                        }}
                    >
                        <Typography variant="h5">
                            GitHub
                        </Typography>
                        <Link href="https://github.com/jchen-sfu" underline="none">
                            {'https://github.com/jchen-sfu'}
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            padding: 1,
                            minHeight: 25,
                            bgcolor: "#fafafa",
                            justifyContent: "right",
                        }}
                    >
                        <Typography variant="h5">
                            LeetCode
                        </Typography>
                        <Link href="https://leetcode.com/jca476/" underline="none">
                            {'https://leetcode.com/jca476/'}
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}