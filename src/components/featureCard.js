import React from 'react'
import { withStyles, Zoom, Paper } from '@material-ui/core';

const styles = theme => ({
    paper : {
        padding : theme.spacing.unit * 2
    }
})

const FeatureCard = (props) => {
    const {classes} = props
    return(
        <Zoom in={props.checked} style={{transitionDelay : props.checked ? props.delay : '0ms'}}>
            <Paper className={classes.paper} elevation={4}>
                {props.children}
            </Paper>
        </Zoom> 
    )
}

export default withStyles(styles)(FeatureCard)