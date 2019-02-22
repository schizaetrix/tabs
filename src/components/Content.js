import React from 'react'


const Content = (props) => {
    return (
        <div
            className={props.segmentState}
            data-tab={props.datatab}
        >
            <h1>
                {props.title}
            </h1>
                {props.content}
        </div>
    )
}

export default Content