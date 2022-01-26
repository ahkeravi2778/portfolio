import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import  Grid from '@mui/material/Grid';
import Link from '@mui/material/Link'
import './Style.css'
import LinkedIn  from '@mui/icons-material/LinkedIn';
import Styles from '../../../Golabal.module.css'
const pages = [
    {
      'title' : 'Home',
      'id' : 1,
      'link' : '/'
    },
    {
      'title' : 'About',
      'id' : 2,
      'link' : '/about'
    },
    {
      'title' : 'Contact',
      'id' : 3,
      'link' : '/contact'
    },

];
function Header() {
  return (
    <AppBar position="sticky" className="navigation" sx={{padding:0}}>
    <Container maxWidth="xl">

    <Toolbar disableGutters >
      <Box sx={{ flexGrow: 1}}>
      <Avatar
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        sx={{ width: 70, height: 70 }}
      />
      </Box>
      <Box sx={{ flexGrow: 10, textAlign: 'center', display: {md:'flex',xs:'none'}, justifyContent:{md:'center',}}}>
          {
            pages.map( (page)=> {
              return (
              <MenuItem key={page.id}>
              <Link color="white" href={page.link} underline="none" >

                {page.title}
              </Link>
              </MenuItem>)
            }
            )
          }
      </Box>
      <Box sx={{ flexGrow: 1, display:'flex'}}>
        <Link href="/social" rel="noopener" target="_blank"> 
        <FacebookIcon className={Styles.textBlue} fontSize='medium' sx={{padding : 1}} ></FacebookIcon>
        </Link>
        <Link href="/social" rel="noopener" target="_blank"> 
        <InstagramIcon className={Styles.textBlue} fontSize='medium' sx={{padding : 1}} ></InstagramIcon>
        </Link>
        <Link href="/social" rel="noopener" target="_blank"> 
        <GitHubIcon className={Styles.textBlue} fontSize='medium' sx={{padding : 1}} > </GitHubIcon>
        </Link>
        <Link href="/social" rel="noopener" target="_blank"> 
        <LinkedIn className={Styles.textBlue} fontSize='medium' sx={{padding : 1}} ></LinkedIn>
        </Link>
      </Box>
    </Toolbar>

    </Container>
  </AppBar>
  )
}
export default  Header;