import React, { Component } from 'react';
import '../App/App.css';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src="./images/profilepic.png" alt="" className="center" />
                    <h1>Marcus Anderberg</h1>
                
                </div>
            </div>
        );
    }
}

export default Header;