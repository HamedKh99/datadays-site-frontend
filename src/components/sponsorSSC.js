import React from 'react'
import { withStyles } from '@material-ui/core';
import '../App.css'

const styles = theme => ({
    container : {
        display : 'flex',
        justifyContent : 'space-around',
        flexDirection : 'row',
    },
    card : {
        display : 'flex',
        flexDirection : 'column',
        width : '20%',
        alignItems : 'center'
    },
    ssclogo :{
        height : '100px'
    },
    title : {
        fontFamily : 'ParastooBold'
    }
})

const SponsorSSC = (props) => {
    const {classes} = props
    return(
        <div className={classes.container}>
            <div className={classes.card}>
                <h3 className={classes.title}>برگزار کننده</h3>
                <img className={classes.ssclogo} src={require('../images/SSC.png')}/>
            </div>
            <div className={classes.card}>
                <h3 className={classes.title}>حامی مالی</h3>
            </div>
        </div>
    )
}

export default withStyles(styles)(SponsorSSC)