import React from "react"
import { Box } from '@mui/material';
import { Biography, Education, Hobbies, Links, Portrait, Projects, Resume, VolunteerEx, WorkEx } from "components/*.js"

export default function Home() {
  return (
    <Box>
      <Biography/>
      <Education/>
      <Hobbies/>
      <Links/>
      <Portrait/>
      <Projects/>
      <Resume/>
      <VolunteerEx/>
      <WorkEx/>
    </Box>
  )
}