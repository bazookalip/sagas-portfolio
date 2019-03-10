import React, { Component } from 'react';


class ProjectItem extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    {this.props.project.thumbnail != "" && <img src={this.props.project.thumbnail} />}
                </div>
                <div>
                    <div>
                        {this.props.project.github !== "" && this.props.project.github}
                        {this.props.project.website !== "" && this.props.project.website}
                        {this.props.project.tag !== "" && this.props.project.tag}
                        {this.props.project.date_completed !== "" && this.props.project.date_completed}
                        {this.props.project.tag_name !== "" && this.props.project.tag_name}



                    </div>
                    <div>
                        {this.props.project.description !== "" && this.props.project.description}
                    </div>
                </div>

           
                <h1> {this.props.project.project_name !== "" && this.props.project.project_name}</h1>
                

               
                   
                    
            </div>

            
        );
    }
}

export default ProjectItem;