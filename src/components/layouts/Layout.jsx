import Grid from "@mui/material/Grid"

export default function Layout({children}) {
    return (
        <Grid container={true} spacing={2}>
            <Grid item={true} lg={2}>

            </Grid>
            <Grid item={true} lg={10}>
                {children}
            </Grid>
        </Grid>
    )
}