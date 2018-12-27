import React, {Component} from 'react'
import { withStyles, Stepper, Step, StepButton, StepConnector } from '@material-ui/core';
import '../App.css'

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
})

class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeStep : 0
        }
    }

    getSteps = () => {
        return ['مرحله 1', 'مرحله 2', 'مرحله 3']
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
        return(
            <div className={classes.container}>
                <h2>برنامه</h2>
                {/* <PersianNumber>5</PersianNumber> */}
                <Stepper className={classes.stepper} nonLinear activeStep={this.state.activeStep} connector={connector}>
                    {steps.map((label, index) => {
                        return(
                            <Step key={label}>
                                <StepButton
                                    onClick={this.handleStep(index)}
                                >
                                    <span className={classes.stepText}>{label}</span>
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