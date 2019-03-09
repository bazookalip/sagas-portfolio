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


    onSubmit = () => {
        console.log('going to get projects');
        this.props.dispatch({ type: 'ADD_PROJECTS' });
       


    }

    deleteButton = (resultsId) => {
       axios({
            method: 'DELETE',
            url: '/portfolio/' + resultsId
        }).then(() => {
            this.getProjects();
        })
    }

  
    componentDidMount() {
        this.getProjects();
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

    getProjects = () => {
        //make call to server using axios
        console.log('going to get projects');
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }

    adminList() {
        return this.props.projects.map(project =>
                 <tr key={project.id}>
                <td> {project.name} </td>
                 <td> {project.description} </td>
                <td><button onClick={() => this.deleteButton(project.id)} className="deleteButton">Delete</button></td>

            </tr>
        )
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
                        <select value={this.state.tag} onChange={this.onChange('tag')}>
                            <option value="1">React</option>
                            <option value="2">jQuery</option>
                            <option value="3">Node</option>
                            <option value="3">SQL</option>
                            <option value="3">Redux</option>
                            <option value="3">HTML</option>
                        </select><br />

                    {/* <div class="dropdown">
                        <button class="dropbtn">Tag</button>
                        <div class="dropdown-content">
                            <option value="1">React</option>
                            <option value="2">jQuery</option>
                            <option value="3">Node</option>
                            <option value="3">SQL</option>
                            <option value="3">Redux</option>
                            <option value="3">HTML</option>
                        </div>
                    </div> */}
              
                    <input type="text" placeholder="GitHub URL" value={this.state.git} onChange={this.onChange('git')} />

                    <input type="text" placeholder="Web URL" value={this.state.web} onChange={this.onChange('web')} />

                    <input type= "text" placeholder="Description" value={this.state.description} onChange={this.onChange('description')} /><br />
                    <button onClick={this.onSubmit}>Submit</button>
                </div>


                <table>
                    <tbody>
                      {this.adminList()}
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
