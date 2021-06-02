import React from 'react'
import {AppBar,Toolbar,Grid,IconButton,Typography,MenuIcon,TextField} from '@material-ui/core';
function Bar() {
    return (
        <AppBar color="inherit">
            <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              
            >
              
            </IconButton>
            <Grid
              container
              spacing={10}
              alignItems="center"
              justify="space-between"
            >
              <Grid item xs={3}>
                <Typography variant="h5" noWrap >
                  CollegeGram
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  variant="filled"
                  placeholder="Search"
                  
                />
              </Grid>

              <Grid item xs={6}>
                <Grid
                  container
                  alignItems="center"
                  justify="flex-end"
                  direction="row"
                >
                 
                  
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    )
}

export default Bar
