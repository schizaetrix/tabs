import React from 'react'


const Tab = (props) => {
    return (
        <button 
            onClick={props.onClick}
            className={props.tabState}
            data-tab={props.dataTab}
        >
            {props.label}
        </button>
    )
}

export default Tab