import React, { Component } from 'react';
import { Paper, withStyles } from '@material-ui/core';
import '../App.css';


const styles = theme => ({
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
            <Paper className={classes.paper}>
                <h2 className={classes.title}>تیتر</h2>
                <p>توضیح توضیح توضیح</p>
            </Paper>
        )
    }
}

export default withStyles(styles)(IntroduceTabContent)