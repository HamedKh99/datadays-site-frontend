import React from 'react'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    container : {
        backgroundColor : '#d9d0f2',
        display : 'flex',
        justifyContent : 'space-around',
        flexDirection : 'row',
        marginTop : theme.spacing.unit
    },
    card : {
        display : 'flex',
        flexDirection : 'column',
        width : '20%',
        alignItems : 'center',
        
    },
    contact : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%'
    },
    contactIcon : {
        width : '12px',
        height : '12px'
    }, 
    
})

const Footer = (props) => {
    const {classes} = props
    return(
        <div className={classes.container}>
            <div className={classes.card}>
                <h3>تماس با ما</h3>
                <div className={classes.contact}>
                    <img className={classes.contactIcon} src={require('../images/call-answer.png')}/>
                    <small>شماره تماس</small>
                </div>
                <div className={classes.contact}>
                    <img className={classes.contactIcon} src={require('../images/email.png')}/>
                    <small>ایمیل</small>
                </div>
            </div>
            <div className={classes.card}>
                <h3>مکان</h3>
            </div>
        </div>
    )
}

export default withStyles(styles)(Footer)