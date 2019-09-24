import React, { Component } from 'react'
import logo from '../../logo.jpg';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
            <nav>
                <div>
                    <img src={logo} alt="logos"/>
                    </div>
                </nav>
                </React.Fragment>
        )
    }
}
