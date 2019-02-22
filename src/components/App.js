import React from 'react'
import TabMenu from './TabMenu'
import Segment from './Segment'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            segmentOneState: 'ui bottom attached active tab segment',
            segmentTwoState: 'ui bottom attached tab segment',
            segmentThreeState: 'ui bottom attached tab segment'
        }
    }
    tabMenuCallback = (tabState) => {
        if (tabState.segmentOneState === true) {
            this.setState({
                segmentOneState: 'ui bottom attached active tab segment',
                segmentTwoState: 'ui bottom attached tab segment',
                segmentThreeState: 'ui bottom attached tab segment'
            })
        } else if (tabState.segmentTwoState === true) {
            this.setState({
                segmentOneState: 'ui bottom attached tab segment',
                segmentTwoState: 'ui bottom attached active tab segment',
                segmentThreeState: 'ui bottom attached tab segment'
            })
        } else if (tabState.segmentThreeState === true) {
            this.setState({
                segmentOneState: 'ui bottom attached tab segment',
                segmentTwoState: 'ui bottom attached tab segment',
                segmentThreeState: 'ui bottom attached active tab segment'
            })
        }
    }
    render () {
        return (
            <div 
                className="ui container" 
                style={{ marginTop: 20 }}
            >
                <TabMenu callbackFromApp={this.tabMenuCallback} />
                <Segment dataFromTab={this.state} />
            </div>
        )
    }
}

export default App