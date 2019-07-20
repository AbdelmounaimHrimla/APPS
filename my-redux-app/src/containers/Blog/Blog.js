import React, { Component } from 'react';
import './css/Blog.css';
import { Switch, Route } from 'react-router'
import Post from '../../components/Post/Post';
import Posts from '../../components/Posts/Posts';

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <div className="insider">
                    <Switch>
                        <Route path="/:post_id" component={Post} />
                        <Route path="/" component={Posts} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Blog;