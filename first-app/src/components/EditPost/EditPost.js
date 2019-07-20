import React, { Component } from 'react';
import './css/EditPost.css';
import { NavLink } from 'react-router-dom';

class EditPost extends Component {
    render() {
        return (
            <div className="editPost">
                <div className="editPost-header">
                    <h1 className="editPost-title">Add Post</h1>
                    <NavLink to="/posts" className="editPost-btnBack">Go Back</NavLink>
                </div>
                <div className="editPost-content">
                    <form>
                        <div className="group">
                            <label htmlFor="title" className="label">Title :</label>
                            <input type="text" id="title" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="body" className="label">Body :</label>
                            <textarea type="text" id="body" className="input" />
                        </div>
                        <NavLink to="/posts" className="editPost-btnEdit">Edit Post</NavLink>  
                    </form>
                </div>
            </div>
        );
    }
}

export default EditPost;