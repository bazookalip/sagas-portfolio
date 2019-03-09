import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import './Home.css'

class Home extends Component {


    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        this.props.dispatch({ type: 'FETCH_PROJECTS' });
    }



    adminList() {
        return this.props.projects.map(project =>
            <tr key={project.id}>
                <td>{project.thumbnail}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.github}</td>

            </tr>
        )
    }

    render() {
      
        // let thumbnail;
         
        // if (this.props.projects.thumbnail === 'public/images/restaurants.png') {
        //     thumbnail = <img alt="Restaurant Project" src="images/restaurants.png" />
        //  } else { thumbnail = null;

        // } 
       

        return (
            <div>
                <Header />
                
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
                {/* {thumbnail} */}
              
     
            </div>

        );
    }
}
const mapReduxToProps = (reduxState) => {
    return reduxState;
};

export default connect(mapReduxToProps)(Home);
