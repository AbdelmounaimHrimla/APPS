import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
//import Todos from '../components/Todos';
//import AddTodo from '../components/AddTodo';
import { Route, Switch } from 'react-router-dom';
import Post from '../components/Post';

class Blog extends Component {
    /*state = {
        todos : [
            {id: 1, content: 'Content 1'},
            {id: 2, content: 'Content 2'},
            {id: 3, content: 'Content 3'},
        ]
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos : todos
        });
    }

    deleteTodo = (id) => {
        //console.log(id);
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            todos : todos 
        });
    }*/
    render() {
        return (
            <div className="blog-content container">
                {/*<h1>Todo's</h1>
                <AddTodo 
                addTodo = {this.addTodo}/>
                <Todos 
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
                />*/}
                <NavBar />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/:post_id" component={Post} />
                </Switch>

                
            </div>
        );
    }
}

export default Blog;