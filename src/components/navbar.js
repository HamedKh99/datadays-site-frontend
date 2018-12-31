import React, {Component} from 'react'
import { withStyles } from '@material-ui/core';
import '../App.css'

const styles = theme => ({
    navbar : {
        width : '25%',
        overflow : 'hidden',
        display : 'flex',
        justifyContent : 'space-around',
        
    },
    navbarItem : {
        fontFamily : 'ParastooBold',
        fontSize : '12px',
        textAlign : 'center',
        padding : '5px 10px',
        borderRadius : '10px',
        textDecoration : 'none',
        color : 'white',
        '&:hover' : {
            backgroundColor : theme.palette.primary.light
        }
    }
});

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {classes} = this.props
        return (
            <nav className={classes.navbar}>
                <a href='/' className={classes.navbarItem}>صفحه اصلی</a>
                <a href='/' className={classes.navbarItem}>بلاگ</a>
                <a href='/' className={classes.navbarItem}>تیم برگزاری</a>
            </nav>
        )
    }
}

export default withStyles(styles)(Navbar)