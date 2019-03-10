import React, { Component } from 'react';
import '../App/App.css';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src="./images/profilepic.png" className="center" />
                    <h1>Marcus Anderberg's</h1>
                    <p>Portfolio</p>
                </div>
            </div>
        );
    }
}

export default Header;