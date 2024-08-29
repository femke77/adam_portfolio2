import Grid from "@mui/material/Grid"

export default function Layout({children}) {
    return (
        <Grid container={true} sx={{display:"flex", justifyContent:"center"}} spacing={2}>
            <Grid item={true} lg={1}>

            </Grid>
            <Grid item={true} alignItems="center"  lg={11}>
                {children}
            </Grid>
        </Grid>
    )
}