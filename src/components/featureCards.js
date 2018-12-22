import React from 'react'
import { withStyles} from '@material-ui/core';
import FeatureCard from './featureCard'

const styles = theme => ({
    container : {
        width : '50%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})

const FeatureCards = (props) => {
    const {classes} = props
    return(
        <div className={classes.container}>
            <FeatureCard checked={true}>
                <p>ویژگی</p>
            </FeatureCard>
            <FeatureCard checked={true} delay={'500ms'}>
                <p>ویژگی</p>
            </FeatureCard>
            <FeatureCard checked={true} delay={'1000ms'}>
                <p>ویژگی</p>
            </FeatureCard>
            <FeatureCard checked={true} delay={'1500ms'}>
                <p>ویژگی</p>
            </FeatureCard>
        </div>
       
    )
} 

export default withStyles(styles)(FeatureCards)