import React from 'react'
import { withStyles, Card} from '@material-ui/core';
import PrizeCard from './prizeCard'
import '../App.css';

const styles = theme => ({
    container : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column'
        // backgroundColor : '#ffc6ee',
    },
    cards : {
        width : '50%',
        display : 'flex',
        justifyContent : 'space-between'
    },
    
})

const Prizes = (props) => {
    const {classes} = props
    return(
        <div className={classes.container}>
            <h2 className={classes.title}>جوایز مسابقه</h2>
            <div className={classes.cards}>
                <PrizeCard
                    checked={true}
                    title={"تیم سوم"}
                />
                <PrizeCard
                    checked={true}
                    title={"تیم اول"}
                    delay="1000ms"
                />
                <PrizeCard
                    checked={true}
                    title={"تیم دوم"}
                    delay="500ms"
                />
            </div>
        </div>
    )
}

export default withStyles(styles)(Prizes)