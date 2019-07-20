import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Post extends Component {
    deleteHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
        .then(response => {
            console.log(response);
        });
    }

    componentDidUpdate () {
        this.deleteHandler();
        console.log('Updated');
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Post</h2>
                </div>
                <div>
                    <h3>{this.props.post.title}</h3>
                    <p>{this.props.post.body}</p>
                    <button onClick={this.deleteHandler}>Delete</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, myProp) => {
    let id = myProp.match.params.post_id;
    return {
        post : state.posts.find(post => post.id == id)
    }
}

export default connect(mapStateToProps)(Post);