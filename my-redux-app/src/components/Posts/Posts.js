import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/Posts.css'; 
import { connect } from 'react-redux';
class Posts extends Component {
    /*deletePostHandler = () => {
        this.props.deletePost(this.props.posts.id);
        onClick={this.deletePostHandler}
    }*/
    listPosts = (post) => {
        return (
            <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>{post.author}</td>
            <td>
                <NavLink to="/edit-post" className="btn-edit">
                    Edit
                </NavLink>
                <NavLink to="/:post_id" className="btn-show">
                    Show
                </NavLink>
                <NavLink 
                to="/" 
                className="btn-show">
                    Delete
                </NavLink>
            </td>
        </tr>
        )
    }
    
    render() {
        console.log(this.props)
        const posts = this.props.posts.map(this.listPosts);

        return (
            <div className="posts">
                <div className="insider">
                    <div className="header">
                        <h1 className="main-title">Posts</h1>
                        <NavLink to="/new-post"  className="add-btn">
                            + New Post
                        </NavLink>
                    </div>
                    <div className="content">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>BODY</th>
                                    <th>AUTHOR</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                               {posts}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => { dispatch({type : 'DELETE_POST', id : id})} 
    }
}*/

export default connect(mapStateToProps)(Posts);