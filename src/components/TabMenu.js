import React from 'react'
import Tab from './Tab'


class TabMenu extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            tabOneState: 'active item',
            tabTwoState: 'item',
            tabThreeState: 'item',
            segmentOneState: true,
            segmentTwoState: false,
            segmentThreeState: false
        }
    }
    componentDidUpdate () {
        this.props.callbackFromApp(this.state)
    }
    clickTabOne = () => {
        this.setState({
            tabOneState: 'active item',
            tabTwoState: 'item',
            tabThreeState: 'item',
            segmentOneState: true,
            segmentTwoState: false,
            segmentThreeState: false
        })
    }
    clickTabTwo = () => {
        this.setState({
            tabOneState: 'item',
            tabTwoState: 'active item',
            tabThreeState: 'item',
            segmentOneState: false,
            segmentTwoState: true,
            segmentThreeState: false
        })
    }
    clickTabThree = () => {
        this.setState({
            tabOneState: 'item',
            tabTwoState: 'item',
            tabThreeState: 'active item',
            segmentOneState: false,
            segmentTwoState: false,
            segmentThreeState: true
        })
    }
    render () {
        return (
            <div className="ui top attached tabular menu">
                <Tab 
                    onClick={this.clickTabOne}
                    tabState={this.state.tabOneState}
                    dataTab="first"
                    label="Hello React"
                />
                <Tab 
                    onClick={this.clickTabTwo}
                    tabState={this.state.tabTwoState}
                    dataTab="second"
                    label="Lorem Ipsum"
                />
                <Tab 
                    onClick={this.clickTabThree}
                    tabState={this.state.tabThreeState}
                    dataTab="third"
                    label="Login Form"
                />
            </div>
        )
    }
}


export default TabMenu