import React, {Component} from 'react'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    container : {
        backgroundColor : "#d9d0f2",
        display : 'flex',
        justifyContent : 'space-around',
        padding : '20px',
        boxShadow : '0px 5px 5px grey'
    },
    logo : {
        width : '20%',
        height : '350px'
    },
    text : {
        alignSelf : 'center'
    }
})

class LogoBanner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props
        return(
            <div className={classes.container}>
                <img className={classes.logo} src={require('../images/logo.png')}/>
                <p className={classes.text}>متن</p>
            </div>
        )
    }
}

export default withStyles(styles)(LogoBanner)