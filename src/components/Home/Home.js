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
            // var thumbnail = null;
            // var name = null;
            // var description = null;
            // var github = null;

            // if(project.thumbnail === ""){
            //     thumbnail = null;
            // }else {
            //     thumbnail = project.thumbnail
            // }

            // if(project.name === "") {
            //     name == null;
            // }

            //     <tr key={project.id}>
            //     <td>{project.thumbnail !="" && <img src={project.thumbnail}/>}</td>
            //     <td>{project.name !== "" && project.name} </td>
            //     <td>{project.description !== "" && project.description}</td>
            //     <td>{project.github !== "" && project.github}</td>
                    <ProjectItem
                    project = {project}
                    
                    />
            // </tr>

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
