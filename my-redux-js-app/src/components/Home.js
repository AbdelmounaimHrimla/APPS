import React, { Component} from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import MyImage from '../rec.png';
import { connect } from 'react-redux'; 


class Home extends Component {
    /*state = {
        posts : [ ]
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({
                posts : response.data.slice(0, 10)
            });
        });
    }*/

    render() {
        console.log(this.props);
        //const {posts} = this.state;
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (

                    <div key={post.id} className="post card">
                    <hr/>
                    <img src={MyImage} alt="a" />
                    <div className="card-content">
                    <Link to={'/' + post.id}>
                    <h4 className="card-title">{post.title}</h4>
                    </Link>
                        <p>{post.body}</p>
                    </div>
                    <hr/>
                    </div>
                )
            })
        ) : (
            <div className="Center">No Posts Yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home);