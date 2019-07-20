import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios'; 
import { setPosts } from '../../actions/postsActions';
class Posts extends Component {
    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data;
            console.log(posts);
            this.props.setPosts(posts.slice(0, 10));
            console.log(posts);


        });
    }
    deletePost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.posts.id)
    }
    componentDidMount() {
        this.getPosts();
        console.log(this.props.id);
   }
   
   listPosts = (post) => {
    return (
        <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title.substring(0, 50)}</td>
            <td>{post.body.substring(0, 50)}</td>
            <td>
                <NavLink className="btn-show" to={'/post/' + post.id}>Show</NavLink>
                <NavLink className="btn-show" to={'/' + post.id}>Delete</NavLink>
            </td>
        </tr>
    ) 
} 
    render() {
        const myPosts = this.props.posts.map(this.listPosts);
        return (
            <div className="posts">
                <div>
                    <h2>Posts</h2>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>BODY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myPosts}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, myProp) => {
    return {
        posts : state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPosts : (posts) => {dispatch(setPosts(posts))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);