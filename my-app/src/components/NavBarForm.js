import React, { Component } from "react";
import css from './css/NavBarForm.module.css';

class NavBarForm extends Component {
    render() {
        return (
            <div className= {css.NavBar}>
                <h1>My Gallery</h1>
            </div>
        )
    }
}

export default NavBarForm
