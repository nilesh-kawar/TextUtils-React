import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? props.mode : 'dark'} bg-${props.mode === 'light' ? props.mode : 'dark'}`}>   
            <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            {/* mobile light dark mode  */}
            <div className={`form-check form-switch mobile text-${props.mode === 'light' ? 'dark' : 'light' }`}>
                    <input className="form-check-input" onClick={props.toggleModeDark} type="checkbox" id="flexSwitchCheckDefault" />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    {/* <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link> */}
                    <a className="nav-link active" aria-current="page" href="#">{props.homeText}</a>
                </li>
                <li className="nav-item">
                    {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
                </li>
                </ul>

                <div className="colorPalletDiv">
                    <button className='mx-2 btn btn-danger colorPallet' onClick={props.toggleModeRed}></button>
                    <button className='mx-2 btn btn-primary colorPallet' onClick={props.toggleModeBlue}></button>
                    <button className='mx-2 btn btn-success colorPallet' onClick={props.toggleModeGreen}></button>
                    <button className='mx-2 btn btn-warning colorPallet' onClick={props.toggleModeYellow}></button>
                </div>
                <div className={`form-check form-switch  desktop text-${props.mode === 'light' ? 'dark' : 'light' }`}>
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