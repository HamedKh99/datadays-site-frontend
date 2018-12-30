import React, {Component} from 'react'
import { withStyles, Stepper, Step, StepButton, StepConnector, StepIcon, StepLabel } from '@material-ui/core';
import { toPersianNum } from '../utils/persian';
import '../App.css'
import ScheduleCard from './scheduleCard';

const styles = theme => ({
    container : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        backgroundColor : "#d9d0f2",
        marginTop : theme.spacing.unit
    },
    stepper : {
        width : '50%',
        backgroundColor : "#d9d0f2",
    },
    stepText : {
        fontFamily : 'Parastoo'
    },
    connectorActive: {
        '& $connectorLine': {
          borderColor: theme.palette.secondary.main,
        },
    },
    connectorCompleted: {
        '& $connectorLine': {
          borderColor: theme.palette.primary.main,
        },
    },
    connectorDisabled: {
        '& $connectorLine': {
          borderColor: theme.palette.grey[100],
        },
    },
    connectorLine: {
        transition: theme.transitions.create('border-color'),
    },
    stepIcon : {
        width : '16px',
        height : '16px'
    }
})

class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeStep : 0
        }
    }

    getSteps = () => {
        return ['مرحله' + toPersianNum(1),'مرحله' + toPersianNum(2),'مرحله' + toPersianNum(3)]
    }

    handleStep = step => () => {
        this.setState({activeStep : step})
    }

    render() {
        const {classes} = this.props
        const steps = this.getSteps()
        const connector = (
            <StepConnector
              classes={{
                active: classes.connectorActive,
                completed: classes.connectorCompleted,
                disabled: classes.connectorDisabled,
                line: classes.connectorLine,
              }}
            />
        );
        const stepIcon = (
            <img className={classes.stepIcon} src={require('../images/diamond.png')}/>
        )
        return(
            <div className={classes.container}>
                <h2>برنامه</h2>
                <ScheduleCard num={this.state.activeStep + 1}/>
                <Stepper className={classes.stepper} nonLinear activeStep={this.state.activeStep} connector={connector}>
                    {steps.map((label, index) => {
                        return(
                            <Step key={label}>
                                <StepButton
                                    onClick={this.handleStep(index)}
                                >
                                    <StepLabel
                                        StepIconProps={{icon : stepIcon}}
                                    >
                                        <span className={classes.stepText}>{label}</span>
                                    </StepLabel>
                                </StepButton>
                            </Step>
                        )
                    })}
                </Stepper>
            </div>
        )
    }
}

export default withStyles(styles)(Schedule)