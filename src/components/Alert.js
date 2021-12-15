import React from 'react'

function Alert(props) {
    const capitalCase = (e) => {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    }

    return (
        <div style={{height:'50px'}}>
            {props.alert && 
            <div>
                <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalCase(props.alert.type)}: </strong> {props.alert.message}
                </div>
            </div>}
        </div>
    )
}

export default Alert