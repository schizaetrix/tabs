import React from 'react'


const Tab = (props) => {
    return (
        <a 
            onClick={props.onClick}
            className={props.tabState}
            data-tab={props.dataTab}
        >
            {props.label}
        </a>
    )
}

export default Tab