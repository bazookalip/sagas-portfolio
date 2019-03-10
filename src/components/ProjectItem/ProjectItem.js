import React, { Component } from 'react';


class ProjectItem extends Component {
    render() {
        return (


            <div className="container">

                {this.props.project.thumbnail !== "" && <img alt="" src={this.props.project.thumbnail} />}

                <div>
                    <h1> {this.props.project.project_name !== "" && this.props.project.project_name}</h1>
                    <p>{this.props.project.github !== "" && this.props.project.github}</p>
                    <p>   {this.props.project.website !== "" && this.props.project.website}</p>
                    <p>{this.props.project.tag_name !== "" && this.props.project.tag_name}</p>
                    {/* {this.props.project.date_completed !== "" && this.props.project.date_completed} */}
                </div>
                {this.props.project.description !== "" && this.props.project.description}










            </div >


        );
    }
}

export default ProjectItem;