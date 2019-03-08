import React, { Component } from 'react';
import './Admin.css'
import {  Link } from 'react-router-dom';

class Admin extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div>
            
            <div className="box">
                <h1>Admin</h1>
                <Link to="/">Home</Link>
                <h2>Add New Project</h2>
                <input placeholder="Name"/>
                 <input placeholder="Date"/> 
            
                <select id="country" name="country">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select><br/>
                <input placeholder="Github URL" /> 
                 <input placeholder="Website URL" /><br/>
                <input placeholder="description" /> 
                <button>Submit</button>
            </div> 
                
                
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                     
                    </tr>
                    <tr>
                        <td>Server Side Calculator</td>
                        <td><button>delete</button></td>
                      
                    </tr>
                    <tr>
                        <td>Restaurants</td>
                        <td><button>delete</button></td>
                       
                    </tr>
                    <tr>
                        <td>Bookstore</td>
                        <td><button>delete</button></td>
                    </tr>
                    </tbody>
                </table>
            
            </div>
        );
    }
}

export default Admin;