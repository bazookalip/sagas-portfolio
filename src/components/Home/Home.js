import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import './Home.css'
import ProjectItem from '../ProjectItem/ProjectItem'

class Home extends Component {


    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }



    adminList() {
            return this.props.projects.map(project =>
            <ProjectItem project={project} />
        );
    }

    render() {



        return (
            <div>
                <Header />
                {this.adminList()}
            </div>

        );
    }
}
const mapReduxToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxToProps)(Home);
