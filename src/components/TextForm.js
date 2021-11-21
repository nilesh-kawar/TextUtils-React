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
    const handleLowerClick = () => {
        let uppercase = text.toLowerCase();
        setText(uppercase)
    }
    // const handleCapClick = () => {
    //     let capLetters = [];
    //     let words = text.split(" ")
    //     for (let i = 0; i < words.length; i++) {
    //         capLetters[i] =  words[i][0].toUpperCase() + words[i].substr(1);
    //     }
    //     let res = capLetters.join(" ")
    //     setText(res)
    //     console.log(res)
    // }
    const handleOnChange = (event) => {
        setText(event.target.value)
        // conso le.log("on chnge");
    }
    return (
        <>
            <div className="container">
                <div className="mt-5 mb-2">
                    <h1 className="mb-3">{props.heading}</h1>
                    <textarea className="form-control" value={text} rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
                {/* <button className="btn btn-primary" onClick={handleCapClick}>Convert to Capitalize</button> */}
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}