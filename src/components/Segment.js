import React from 'react'
import Content from './Content'
import { segmentContent } from './segmentContent'


class Segment extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            segmentOneState: this.props.dataFromTab.segmentOneState,
            segmentTwoState: this.props.dataFromTab.segmentTwoState,
            segmentThreeState: this.props.dataFromTab.segmentThreeState
        }
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps !== this.props) {
            this.setState({
                segmentOneState: this.props.dataFromTab.segmentOneState,
                segmentTwoState: this.props.dataFromTab.segmentTwoState,
                segmentThreeState: this.props.dataFromTab.segmentThreeState
            })
        }
    }
    render () {
        return (
            <div>
                <Content 
                    segmentState={this.state.segmentOneState}
                    dataTab="first"
                    title={segmentContent.segmentOne.title}
                    content={segmentContent.segmentOne.content}
                />
                <Content 
                    segmentState={this.state.segmentTwoState}
                    dataTab="second"
                    title={segmentContent.segmentTwo.title}
                    content={segmentContent.segmentTwo.content}
                />
                <Content 
                    segmentState={this.state.segmentThreeState}
                    dataTab="third"
                    title={segmentContent.segmentThree.title}
                    content={segmentContent.segmentThree.content}
                />
            </div>
        )
    }
}

export default Segment