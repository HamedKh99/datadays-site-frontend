import React, { Component } from 'react';
import { withStyles, Tabs, Tab, AppBar } from '@material-ui/core';
import TabContainer from './tabContainer'
import '../App.css'
import IntroduceTabContent from './introduceTabContent';
import FeatureCards from './featureCards'

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabLabel : {
        fontFamily : 'ParastooBold', 
    },
    tabIndicator : {
        backgroundColor : theme.palette.primary.light,
    }
});

class TabBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabNum : 0
        }
    }

    handleTabChange = (event, value) => {
        this.setState({tabNum : value})
    }

    render() {
        const {classes} = this.props
        const {tabNum} = this.state
        return(
            <div className={classes.root}>
                <AppBar position='static'>
                    <Tabs classes={{indicator : classes.tabIndicator}} fullWidth value={tabNum} onChange={this.handleTabChange}>
                        <Tab className={classes.tabLabel} label='معرفی'/>
                        <Tab className={classes.tabLabel} label='ویژگی ها'/>
                    </Tabs>
                </AppBar>
                <TabContainer>
                    {tabNum === 0 && <IntroduceTabContent/>}
                    {tabNum !== 0 && <FeatureCards checked={true}/>}
                </TabContainer>
            </div>
        )
    }
}

export default withStyles(styles)(TabBox)