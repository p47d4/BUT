// import React from "react";
import { Typography, Box, Link, List, ListItem } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


const Educational = () => {
  return (



    <Paper
      variant="outlined"
      sx={{
        borderRadius: '16px',
        padding: '16px',
        margin: '16px',
        border: '1px solid #ccc',
      }}
      className="section-of-education"
    >
      <Box id="section-of-education-div">
        <Typography id="education-div-p">
          Below, you'll find some carefully curated tools that we believe can help you relax in stressful situations you may find yourself in. Please feel free to click any link and get started.
        </Typography>
      </Box>

      <Box id="educational-links-div">
        <Box id="div-1" mb={2}>
          <Typography variant="h6" className="div-class">
            Understanding Mental Health
          </Typography>
          <List className="educational-links-ul">
            <ListItem className="educational-links-li">
              <Link
                href="https://www.mentalhealthishealth.us/mental-health-101/"
                className="div-class-a"
                underline="hover"
              >
                Mental Health 101: What You Need to Know
              </Link>
            </ListItem>
            <ListItem className="educational-links-li">
              <Link
                href="https://www.nhs.uk/mental-health/conditions/depression-in-adults/symptoms/"
                className="div-class-a"
                underline="hover"
              >
                Recognizing Signs of Anxiety and Depression
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box id="div-2" mb={2}>
          <Typography variant="h6" className="div-class">
            Managing Stress
          </Typography>
          <List className="educational-links-ul">
            <ListItem className="educational-links-li">
              <Link
                href="https://kidshealth.org/en/teens/stress-tips.html"
                className="div-class-a"
                underline="hover"
              >
                10 Tips to Manage Stress
              </Link>
            </ListItem>
            <ListItem className="educational-links-li">
              <Link
                href="https://drwatlington.com/what-is-your-stress-management-plan/"
                className="div-class-a"
                underline="hover"
              >
                How to Create a Stress Management Plan
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box id="div-3" mb={2}>
          <Typography variant="h6" className="div-class">
            Time Management
          </Typography>
          <List className="educational-links-ul">
            <ListItem className="educational-links-li">
              <Link
                href="https://extension.uga.edu/publications/detail.html?number=C1042&title=time-management-10-strategies-for-better-time-management"
                className="div-class-a"
                underline="hover"
              >
                Effective Time Management Strategies
              </Link>
            </ListItem>
            <ListItem className="educational-links-li">
              <Link
                href="https://www.stetson.edu/administration/academic-success/media/STUDY%20SCHEDULE.pdf"
                className="div-class-a"
                underline="hover"
              >
                Creating a Balanced Study Schedule
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box id="div-4" mb={2}>
          <Typography variant="h6" className="div-class">
            Healthy Habits
          </Typography>
          <List className="educational-links-ul">
            <ListItem className="educational-links-li">
              <Link
                href="https://www.sutterhealth.org/health/nutrition/eating-well-for-mental-health#:~:text=A%20healthy%2C%20well%2Dbalanced%20diet,can%20slow%20down%20reaction%20time."
                className="div-class-a"
                underline="hover"
              >
                The Role of Nutrition in Mental Health
              </Link>
            </ListItem>
            <ListItem className="educational-links-li">
              <Link
                href="https://www.sleepfoundation.org/sleep-hygiene/bedtime-routine-for-adults"
                className="div-class-a"
                underline="hover"
              >
                Establishing a Healthy Sleep Routine
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box id="div-5" mb={2}>
          <Typography variant="h6" className="div-class">
            Coping Mechanisms
          </Typography>
          <List className="educational-links-ul">
            <ListItem className="educational-links-li">
              <Link
                href="https://www.verywellmind.com/forty-healthy-coping-skills-4586742"
                className="div-class-a"
                underline="hover"
              >
                Healthy Coping Mechanisms for Emotional Distress
              </Link>
            </ListItem>
            <ListItem className="educational-links-li">
              <Link
                href="https://www.linkedin.com/pulse/building-resilience-strategies-overcoming-adversity-abu-alif-824tf#:~:text=Resilience%20is%20the%20ability%20to%20adapt%20and%20grow%20through%20difficulties.&text=Embrace%20Growth%3A%20See%20challenges%20as,Prioritize%20self%2Dcare%20and%20relaxation."
                className="div-class-a"
                underline="hover"
              >
                Building Resilience: Strategies for Overcoming Adversity
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Paper>
  );
};

export default Educational;
