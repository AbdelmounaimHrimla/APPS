import React, { Component } from 'react';
import Posts from '../../components/Posts/Posts';
import { Route, Switch } from 'react-router-dom';
import Post from '../../components/Post/Post';

class Blog extends Component {
    render() {
        return (
            <div className="blog">
                <Posts />
                <Switch>
                    <Route path="/post/:post_id" component={Post} />
                </Switch>
                </div>
        );
    }
}

export default Blog;