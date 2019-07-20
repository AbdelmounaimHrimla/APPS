import React, { Component } from 'react';
import './css/Post.css';
import { NavLink } from 'react-router-dom';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="post-header">
                    <h1 className="post-title">Post</h1>
                    <NavLink to="/posts" className="post-btnBack">Go Back</NavLink>
                </div>
                <div className="post-content">
                    <div className="card">
                        <span className="id">1</span>
                        <h2 className="title">Post Title Here</h2>
                        <p className="body">Post Body Here</p>
                        <NavLink to="/posts" className="post-btnDelete">Delete</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;