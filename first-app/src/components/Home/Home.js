import React, { Component } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="flexing home-header">
                    <h1 className="home-title">Home</h1>
                </div>
                <div className="home-content">
                    <Link className="link" to="/posts">
                        <div className="card flexing allPosts">
                            Posts Here
                        </div>
                    <Link>
                    <Link className="link" to="/new-post">
                        <div className="card flexing newPost">
                            New Post Here
                        </div>
                    <Link>
                    <Link className="link" to="/infos-post">
                        <div className="card flexing infoPost">
                            Info Post Here
                        </div>
                    <Link>
                </div>
            </div>
        );
    }
}

export default Home;