import Grid from "@mui/material/Grid"
import Nav from "./Nav"

export default function Layout({children}) {
    return (
        <Grid container={true} sx={{display:"flex", justifyContent:"center"}} spacing={2}>
            <Grid item={true} lg={1}>
                <Nav />
            </Grid>
            <Grid item={true} alignItems="center"  lg={10}>
                {children}
            </Grid>
            <Grid item={true} lg={1}>

            </Grid>
        </Grid>
    )
}