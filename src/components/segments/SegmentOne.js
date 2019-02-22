import React from 'react'
import logo from '../../logo.svg'

const SegmentOne = () => {
    return (
        <div className="description">
            <p>
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
            </p>
            <p>
                Declarative views make your code more predictable and easier to debug
            </p>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    )
}

export default SegmentOne