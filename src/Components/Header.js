import React, { Component } from 'react';
import './Header.css';
import  {Link} from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Btn">
                    <Link to="/Quiz">
                        <button className="StartBtn">START</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header
