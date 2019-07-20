import React, { Component } from 'react';
import './css/Posts.css';
import { NavLink } from 'react-router-dom';

class Posts extends Component {
    render() {
        return (
            <div className="posts">
                <div className="posts-header">
                    <h1 className="posts-title">Posts</h1>
                    <NavLink to="/new-post" className="posts-btnNew">+ Add New Post</NavLink>
                </div>
                <div className="posts-content">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>BODY</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>TITLE 1</td>
                                <td>BODY 1</td>
                                <td>
                                    <NavLink to={'/post'} className="posts-btnShow">Show</NavLink>
                                    <NavLink to="/edit-post" className="posts-btnEdit">Edit</NavLink>
                                    <NavLink to="/delete" className="posts-btnDelete">Delete</NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>      
            </div>
        );
    }
}

export default Posts;