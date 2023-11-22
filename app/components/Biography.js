import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';

const BioSection = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        My Bio
      </Typography>
      <Grid container spacing={2}>
        {/* Bio/Overview Section */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </Typography>
          </Paper>
        </Grid>

        {/* Image Block */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            {/* Replace the image URL with your own */}
            <img
              src="https://via.placeholder.com/400x400"
              alt="Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BioSection;