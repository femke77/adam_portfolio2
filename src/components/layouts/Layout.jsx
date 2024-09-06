import Grid from "@mui/material/Grid"
import Nav from "./Nav"
import Socials from "./Socials"
import { useMediaQuery } from '@mui/material';

export default function Layout({children}) {
    const isMobile = useMediaQuery('(max-width:700px)');
    const styles = {
        socials: {
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          right: '50px',
          top: '25vh',
        }
      }
    return (
        <Grid container={true}  spacing={2}>
            <Grid item={true} sx={{marginLeft:"20px"}} lg={1}>
                <Nav />
            </Grid>
            <Grid item={true} alignItems="center"  lg={10}>
                {children}
            </Grid>
            <Grid item={true} lg={1}>
                {!isMobile && (<Socials styles={styles.socials} placement={'right'} color={'primary'} background={'transparent'} />)}
            
            </Grid>
        </Grid>
    )
}