import React from 'react'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : 'transparent',
        position : 'fixed',
        bottom : theme.spacing.unit,
        right : theme.spacing.unit * 2,
        zIndex : '1000'
    },
    listOfLogos : {
        listStyleType : 'none'
    },
    logo : {
        width : '14px',
        height : '14px',

    },
    listItem : {
        display : 'flex',
        border : '1px solid black',
        borderRadius : '60%',
        padding : '5px',
        width : '20px',
        height : '20px',
        justifyContent : 'center',
        alignItems : 'center',
        margin : '5px'
    }
})

const SocialNetworks = (props) => {
    const {classes} = props
    return(
        <div className={classes.container}>
            <ul className={classes.listOfLogos}>
                <li className={classes.listItem}><img className={classes.logo} src={require('../images/telegram.png')}/></li>
                <li className={classes.listItem}><img className={classes.logo} src={require('../images/instagram.png')}/></li>
                <li className={classes.listItem}><img className={classes.logo} src={require('../images/twitter.png')}/></li>
            </ul>
        </div>
    )
}

export default withStyles(styles)(SocialNetworks)