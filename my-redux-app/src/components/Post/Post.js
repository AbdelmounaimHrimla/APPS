import React, { Component } from 'react';
import './css/Post.css';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';


class Post extends Component {
    render() {
        
        return (
            <div className="post">
                <div className="insider">
                    <div className="header">
                        <h1 className="main-title">Post</h1>
                        <NavLink to="/" className="back-btn">
                            Go Back
                        </NavLink>
                    </div>
                </div>
                <div className="content">
                    <h1>{this.props.post.title}</h1>
                    <p>{this.props.post.body}</p>
                    <h3>{this.props.post.author}</h3>
                    <NavLink to="/" className="delete-btn">
                        Delete
                    </NavLink>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, myProps) => {
    let id = myProps.match.params.post_id;
    return {
        post : state.posts.find(post =>  post.id === id )
    }
}

export default connect(mapStateToProps)(Post);