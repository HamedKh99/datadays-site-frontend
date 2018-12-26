import React, {Component} from 'react'
import { withStyles, Paper } from '@material-ui/core';

const styles = theme => ({
    container : {
        padding : '10px',
        backgroundColor : "#d9d0f2",
        display : 'flex',
        justifyContent : 'center',
    },
})

const TabContainer = (props) => {
    const {classes} = props
    return(
        <div className={classes.container}>
            {props.children}
        </div>
    )
}

export default withStyles(styles)(TabContainer)