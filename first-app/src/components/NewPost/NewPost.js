import React, { Component } from 'react';
import './css/NewPost.css';
import { NavLink } from 'react-router-dom';

class NewPost extends Component {
    render() {
        return (
            <div className="newPost">
                <div className="newPost-header">
                    <h1 className="newPost-title">Add Post</h1>
                    <NavLink to="/posts" className="newPost-btnBack">Go Back</NavLink>
                </div>
                <div className="newPost-content">
                    <form>
                        <div className="group">
                            <label htmlFor="title" className="label">Title :</label>
                            <input type="text" id="title" className="input" />
                        </div>
                        <div className="group">
                            <label htmlFor="body" className="label">Body :</label>
                            <textarea type="text" id="body" className="input" />
                        </div>
                        <NavLink to="/posts" className="newPost-btnAdd">Add Post</NavLink>  
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;