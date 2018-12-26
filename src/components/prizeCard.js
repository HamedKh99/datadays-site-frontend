import React from 'react'
import { withStyles, Fade, Card } from '@material-ui/core';


const styles = theme => ({
    card : {
        width : '30%',
        backgroundColor : theme.palette.primary.light,
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        paddingBottom : theme.spacing.unit
    },
    title : {
        fontFamily : 'ParastooBold'
    }
})

const PrizeCard = (props) => {
    const {classes} = props
    return(
        <Fade in={props.checked} style={{transitionDelay : props.checked ? props.delay : '0ms'}}>
            <Card className={classes.card}>
                <h5 className={classes.title}>{props.title}</h5>
                <img src={require('../images/medal.png')}/>
            </Card>
        </Fade>
    )
}

export default withStyles(styles)(PrizeCard)