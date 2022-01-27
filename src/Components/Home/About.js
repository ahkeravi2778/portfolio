import React from 'react';
import { Box} from '@mui/system';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography  from '@mui/material/Typography';
import Styles from '../../Golabal.module.css'
import { Button } from '@mui/material';
function About() {
  return (
      <Box className={Styles.aboutBackground} sx={{  display:'flex', alignItems:'center' ,textAlign:'center',color:'#fff' }}>
          <Container>
        <Grid container spacing={2} sx={{alignItems:'center',paddingTop:12,paddingBottom:12}}>
            <Grid item xs={12} md={4} >
              <Typography variant='h3' className={Styles.titleText}>ABOUT ME</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
              </Typography>
              <Button sx={{ mt: 3, mr:3 }} variant="contained"  size='medium'>Contact Us</Button>
              <Button sx={{ mt: 3 }} variant="contained" size='medium'>Download Resume</Button>
            </Grid>
        </Grid>
        </Container>
      </Box>
  );
}

export default About;
