import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')
    // text = "change text value" //Wrong way to change state
    // setText("Change text value using setText")   //Right way to chnage state

    const handleUpClick = () => {
        let uppercase = text.toUpperCase();
        setText(uppercase)
        // console.log("Upper Case was clicked");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
        // console.log("on chnge");
    }
    return (
        <div className="container">
            <div className="mt-5 mb-2">
                <h1 className="mb-3">{props.heading}</h1>
                <textarea className="form-control" value={text} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
        </div>
    )
}
