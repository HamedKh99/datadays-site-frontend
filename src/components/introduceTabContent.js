import React, { Component } from 'react';
import { Paper, withStyles } from '@material-ui/core';
import '../App.css';


const styles = theme => ({
    container : {
        width : '100%',
        padding : '20px',
        display : 'flex',
        justifyContent : 'center'
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        width : '50%'
    },
    title : {
        fontFamily : 'Parastoo'
    }
})

class IntroduceTabContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props
        return(
            <div className={classes.container}>
                <Paper className={classes.paper}>
                    <h2 className={classes.title}>تیتر</h2>
                    <p>توضیح توضیح توضیح</p>
                </Paper>
            </div>
            
        )
    }
}

export default withStyles(styles)(IntroduceTabContent)