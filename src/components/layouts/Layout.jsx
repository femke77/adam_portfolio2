import Grid from "@mui/material/Grid"
import Nav from "./Nav"
import Socials from "./Socials"
import { useMediaQuery } from '@mui/material';
import "./Layout.css"

export default function Layout({bgcolor, bgStyles, children}) {
    console.log(bgStyles);
    
    const isMobile = useMediaQuery('(max-width:700px)');
    const styles = {
        socials: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'fixed',
          right: '35px',
          top: '25vh',
         
        },
        
      }
    return (
        <Grid container={true} spacing={3} style={bgStyles} >
            <Grid item={true}  sx={{flexDirection: "column", alignItems:"center"}} xs={1.5} sm={1.5} md={1.5}  lg={1.5}>
                <Nav />
            </Grid>
            <Grid item={true} sx={{ padding: "20px"}} xs={10.5} sm={10} md={9} lg={9}>
                {children}
            </Grid>
            <Grid  item={true} sx={{flexDirection: "column", alignItems: "center", }} xs={0} sm={0.5} md={1.5} lg={1.5}>
                {!isMobile ? (<Socials  styles={styles.socials}  placement={'right' } color={'secondary'} background={'transparent'} isMobile={isMobile} />) : ("")}
            
            </Grid>
        </Grid>
    )
}