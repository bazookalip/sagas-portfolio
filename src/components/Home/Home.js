import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'


class Home extends Component {


    componentDidMount() {
        this.getProjects();
    }



    getProjects = () => {
        //make call to server using axios
        console.log('going to get projects');
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }



    adminList() {
        return this.props.projects.map(project =>
            <tr key={project.id}>
                <td>{project.thumbnail}</td>
                <td> {project.name} </td>
                <td> {project.description} </td>
                <td>{project.github}</td>
               
            </tr>
        )
    }
    // Renders the entire app on the DOM
    render() {
        let thumbnail;

        if (this.props.projects.thumbnail === '') {
            thumbnail = <img alt="Empty" src="images/empty.png" />
        }
        else if (this.props.projects.thumbnail === 'public/images/restaurant.png') {
            thumbnail = <img alt="Restaurant Project" src="images/restaurants.png" />
        }
            return (
           <div>
               <Header/>
                <table>
                    <tbody>
                        <tr>
                            <th>image</th>
                            <th>Project</th>
                            <th>Description</th>
                            <th>Github</th>
                        </tr>

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

export default connect(mapReduxToProps)(Home);
