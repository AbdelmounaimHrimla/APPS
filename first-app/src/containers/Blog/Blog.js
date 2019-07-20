import React, { Component } from 'react';
import './css/Blog.css'; 
import Home from '../../components/Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import NewPost from '../../components/NewPost/NewPost';
import EditPost from '../../components/EditPost/EditPost';
import Post from '../../components/Post/Post';
import Posts from '../../components/Posts/Posts';
import { Switch, Route} from 'react-router-dom';


class Blog extends Component {

    render() {
        return (
            <div className="blog">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/all-posts" component={Posts}/>
                    <Route path="/post/:post_id" component={Post}/>
                    <Route path="/:post_id" component={EditPost}/>
                </Switch>  
            </div>
        );
    }
}

export default Blog;