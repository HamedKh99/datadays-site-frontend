import React from 'react';
import {withStyles, Paper, Fade} from '@material-ui/core'
import { toPersianNum } from '../utils/persian';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom : theme.spacing.unit,
        width : '20%'
    },
})

const ScheduleCard = (props) => {
    const {classes} = props
    return(
        <Fade in={true} style={{transitionDelay:'200ms'}}>
            <Paper className={classes.root} elevation={2}>
                <h3>{"تیتر" + toPersianNum(props.num)}</h3>
                <p>متن متن متن</p>
            </Paper>
        </Fade>
        
    )
}

export default withStyles(styles)(ScheduleCard)