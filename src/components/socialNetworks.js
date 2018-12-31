import React from 'react'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'transparent',
        position : 'fixed',
        bottom : theme.spacing.unit * 2,
        right : theme.spacing.unit * 2,
        zIndex : '1000'
    }
})

const SocialNetworks = (props) => {
    const {classes} = props
    return(
        <div className={classes.container}>
            <small>تلگرام</small>
            <small>اینستاگرام</small>
            <small>توییتر</small>
        </div>
    )
}

export default withStyles(styles)(SocialNetworks)