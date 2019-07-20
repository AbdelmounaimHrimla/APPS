import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';
class Post extends Component {
    /*state = {
        //id : null,
        post : null
    }
    componentDidMount() {
        //console.log(this.props);
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => {
            this.setState({
                post : response.data
            });
            //console.log(response);
        });
       
        /*this.setState({
            id : id
        })
    }*/

    deleteHandler = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button onClick={this.deleteHandler} className="center">Delete</button>
            </div>
        ) : (
            <div className="center">Loading Post...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        );
    }
}

const mapStateToProps = (state, myProps) => {
    let id = myProps.match.params.post_id;
    return {
        
        post: state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);