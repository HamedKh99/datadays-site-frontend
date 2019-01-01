import React, {Component} from 'react'
import { withStyles, Stepper, Step, StepButton, StepConnector, StepIcon, StepLabel } from '@material-ui/core';
import { toPersianNum } from '../utils/persian';
import '../App.css'
import ScheduleCard from './scheduleCard';

import  VerticalTimeline from './timeline/VerticalTimeline'
import VerticalTimelineElement from './timeline/VerticalTimelineElement'
import './timeline/style.min.css'

class Schedule extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div style={{backgroundColor : '#d9d0f2'}} dir='ltr'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="مرحله اول"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    //   icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">ثبت نام</h3>
                    <h4 className="vertical-timeline-element-subtitle">تاریخ</h4>
                    
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="مرحله دوم"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">غیر حضوری</h3>
                    <h4 className="vertical-timeline-element-subtitle">تاریخ</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="مرحله سوم"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">حضوری</h3>
                    <h4 className="vertical-timeline-element-subtitle">تاریخ</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            
        )
    }
}

export default Schedule