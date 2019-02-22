import React from 'react'


const Tab = (props) => {
    return (
        <div 
            onClick={props.onClick}
            className={props.tabState}
            data-tab={props.dataTab}
        >
            {props.label}
        </div>
    )
}

export default Tab