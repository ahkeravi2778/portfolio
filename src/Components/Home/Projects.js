import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Styles from '../../Golabal.module.css'
import Typography  from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import itemData1 from '../ImageList';
function Projects() {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    console.log(value)
    return (
    <Box sx={{ diplay:'flex', justifyItems:'center' ,width: '100%', typography: 'body1', color:'#fff', paddingTop : 5, paddingBottom:  5 }} className={Styles.darkBackground}>
      <Typography align='center' variant='h2' className={Styles.titleText}>
                PROJECTS
            </Typography>
    <Box sx={{  width:{ md:'70%',xs:'100%'}, margin:'auto'}}>
      <TabContext value={value}>
        <Box sx={{ diplay:'flex', justifyItems:'center' ,borderBottom: 1, borderColor: 'divider' ,color:'#fff', paddingTop:5  }}>
          <TabList onChange={handleChange} 
          indicatorColor="primary"
          textColor="inherit"
          centered
          aria-label="full width tabs example" >
            <Tab label="All" value="1" />
            <Tab label="Website" value="2" />
            <Tab label="Mobile" value="3" />
            <Tab label="Template" value="4" />
          </TabList>
        </Box>
        
        <TabPanel value="1">
        <ImageList sx={{ width: '100%', height: 350 }}>
         {itemData1.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  position="below"
                />
              </ImageListItem>
            ))
          }
    </ImageList>
        </TabPanel>
        <TabPanel value="2">
        <ImageList sx={{ width: '100%', height: 350 }}>
         {itemData1.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  position="below"
                />
              </ImageListItem>
            ))
          }
    </ImageList>
        </TabPanel>
        <TabPanel value="3">
        <ImageList sx={{ width: '100%', height: 350 }}>
         {itemData1.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  position="below"
                />
              </ImageListItem>
            ))
          }
    </ImageList>
        </TabPanel>
        <TabPanel value="4">
        <ImageList sx={{ width: '100%', height: 350 }}>
         {itemData1.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  position="below"
                />
              </ImageListItem>
            ))
          }
    </ImageList>
        </TabPanel>
      </TabContext>
      </Box>
    </Box>
  );
}

export default Projects;
