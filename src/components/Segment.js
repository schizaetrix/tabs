import React from 'react'
import Content from './Content'


const segmentContent = {
    segmentOne: {
        title: "Hello React!",
        content: () => {
            return (
                <div>
                    <p>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                    </p>
                    <p>Declarative views make your code more predictable and easier to debug</p>
                </div>
            )
        }
    },
    segmentTwo: {
        title: "Number of ",
        content: "Lorem Ipsum content"
    },
    segmentThree: {
        content: "Login Screen content"
    }
}

class Segment extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            segmentOneState: this.props.dataFromTab.segmentOneState,
            segmentTwoState: this.props.dataFromTab.segmentTwoState,
            segmentThreeState: this.props.dataFromTab.segmentThreeState
        }
    }
    render () {
        return (
            <div>
                <Content 
                    segmentState={this.state.segmentOneState}
                    dataTab="first"
                    title={segmentContent.segmentOne.title}
                    content={segmentContent.segmentOne.content()}
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
                    content={segmentContent.segmentThree.content}
                />
            </div>
        )
    }
}

export default Segment