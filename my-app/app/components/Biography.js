import React from "react";
import { Box, Typography } from '@mui/material';

const Biography = () => {

    return (
        <Box>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="25vh"
            >
                <Typography
                    variant="h4"
                >
                    Hello World!
                </Typography>
                <Typography
                    variant="p"
                >
                    I'm Jerry. I study, code, and play games.
                </Typography>
            </Box>
        </Box>

    )
}

export default Biography;