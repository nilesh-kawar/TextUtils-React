import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')
    // text = "change text value" //Wrong way to change state
    // setText("Change text value using setText")   //Right way to chnage state

    const handleUpClick = () => {
        let uppercase = text.toUpperCase();
        setText(uppercase)
        props.showAlert("Text converted to UPPERCASE", "success");
        // console.log("Upper Case was clicked");
    }
    const handleLowerClick = () => {
        let uppercase = text.toLowerCase();
        setText(uppercase)
        props.showAlert("Text converted to LOWERCASE", "success");
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
                    <h1 className="text-center">Text Analyzer</h1>
                    <h3 className="mb-3 mt-5">{props.heading}</h3>
                    <textarea className="form-control" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#373c41' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <div className="text-center">
                    <button className={`btn btn-${props.mode} mx-1 my-2`} onClick={handleUpClick}>Convert to UPPERCASE</button>
                    <button className={`btn btn-${props.mode} mx-1 my-2`} onClick={handleLowerClick}>Convert to lowercase</button>
                    {/* <button className="btn btn-primary" onClick={handleCapClick}>Convert to Capitalize</button> */}
                </div>
            </div>
            <div className="container my-3">
                <h3 className="mt-5">Your text summary</h3>
                <p>{text.length > 0 ? text.trim().split(" ").length : 0} words and {text.length} characters | {0.008 * text.split(" ").length} Minutes read</p>
                
                <h3  className="mt-3">Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to textbox above to preview it here"}</p>
            </div>
        </>
    )
}
