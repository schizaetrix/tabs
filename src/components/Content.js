import React from 'react'


const Content = (props) => {
    return (
        <div
            className={props.segmentState}
            data-tab={props.dataTab}
        >
            <h2>
                {props.title}
            </h2>
                {props.content}
        </div>
    )
}

export default Content