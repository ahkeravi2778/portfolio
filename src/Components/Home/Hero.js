    import React from 'react';
    import { Box, Button} from '@mui/material';
    import Typography from '@mui/material/Typography'
    import Styles from '../../Golabal.module.css'

    function Hero() {


    return (
        <Box className={Styles.heroBackground} sx={{display:'flex'}} container spacing={0} mt={-10} height="600px" >
        <Box sx={{ flexGrow: 10, textAlign: 'center', display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Box  sx={{textAlign: 'center', width:{md:'50%',xs:"70%"}}}>

            <Typography  variant='h2' className={Styles.titleText}>
                I AM AHKERAVI 
            </Typography>
            <Typography align='center' variant='h6' className={Styles.textWhite}>
                The component used for the root node. Either a string to use a HTML element or a component.
            </Typography>
            <Button sx={{ mt: 3 }} variant="contained" size="medium">Contact Me</Button>
            </Box>
        
        </Box>

        </Box>
    );
    }

    export default Hero;
