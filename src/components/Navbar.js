import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? props.mode : 'dark'} bg-${props.mode === 'light' ? props.mode : 'dark'}`}>   
            <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.homeText}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.aboutText}</a>
                </li>
                </ul>

                <div className="colorPalletDiv">
                    <button className='mx-2 btn btn-danger colorPallet' onClick={props.toggleModeRed}></button>
                    <button className='mx-2 btn btn-primary colorPallet' onClick={props.toggleModeBlue}></button>
                    <button className='mx-2 btn btn-success colorPallet' onClick={props.toggleModeGreen}></button>
                    <button className='mx-2 btn btn-warning colorPallet' onClick={props.toggleModeYellow}></button>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light' }`}>
                    <input className="form-check-input" onClick={props.toggleModeDark} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
                </div>
            </div>
            </div>
        </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    homeText: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Set title here',
    homeText: 'Home text here',
    aboutText: 'About text here'
}