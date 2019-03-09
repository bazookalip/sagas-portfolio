import React, { Component } from 'react';
import './Admin.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'

class Admin extends Component {
    state = {
        name: '',
        date: '',
        tag: '',
        github: '',
        website: '',
        description: '',
    };

  
    componentDidMount() {
        // console.log('in component did mount');
        this.getResults();
    }

    onChange = (property) => (event) => {
        console.log(event.target.value)
        event.preventDefault();
        this.setState({
            ...this.state,
            [property]: event.target.value,
        });
    };

    handleClick = (event) => {
        event.preventDefault();

    };

    getResults = () => {
        //make call to server using axios
        axios({
            method: 'GET',
            url: '/results',
        }).then((response) => {
            //  console.log('data here', response.data);
            this.setState({
                results: response.data
            });
        }).catch((error) => {
            console.log('could not get results');
            console.log('could not get results', error);
        })
    }


    render() {
        return (
            <div>

                <div className="box">
                    <h1>Admin</h1>
                    <Link to="/">Home</Link>
                    <h2>Add New Project</h2>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.onChange('name')} />
                    <input type="date" value={this.state.date} onChange={this.onChange('date')} />

                    <select value={this.state.name} onChange={this.onChange('tag')}>
                        <option value="1">React</option>
                        <option value="2">jQuery</option>
                        <option value="3">Node</option>
                        <option value="3">SQL</option>
                        <option value="3">Redux</option>
                        <option value="3">HTML</option>
                    </select><br />
                    <input type="text" placeholder="GitHub URL" value={this.state.git} onChange={this.onChange('git')} />

                    <input type="text" placeholder="Web URL" value={this.state.web} onChange={this.onChange('web')} />

                    <textarea placeholder="Description" value={this.state.description} onChange={this.onChange('description')} /><br />
                    <button onClick={this.handleClick}>Submit</button>
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

const mapReduxToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxToProps)(Admin);
