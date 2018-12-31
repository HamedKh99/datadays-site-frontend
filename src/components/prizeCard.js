import React, { Component, createRef } from 'react'
import { withStyles, Fade, Card, RootRef } from '@material-ui/core';
import ScrollReveal from 'scrollreveal';


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

class PrizeCard extends Component {
    constructor(props) {
        super(props)
        this.box = createRef()
    }

    componentDidMount() {
        const config = {
            origin: 'right',
            duration: 1000,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            rotate : {
                x : 20,
                z : 50
            }
        }
        ScrollReveal().reveal(this.box.current, config)
    }
    
    render() {
        const {classes} = this.props
        return(
            <RootRef rootRef={this.box}>
                <Card className={classes.card}>
                    <h5 className={classes.title}>{this.props.title}</h5>
                    <img src={require('../images/medal.png')}/>
                </Card>
            </RootRef>
        )
    }
}

export default withStyles(styles)(PrizeCard)