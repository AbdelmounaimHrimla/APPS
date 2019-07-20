import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content : ''
    }

    changeHandler = (event) => {
        this.setState({
            content : event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
        console.log(this.state);
    }
    render() {
        return (
            <div className="addForm-content">
                <form onSubmit={this.submitHandler}>
                    <label>Add new todo :</label>
                    <input type="text" onChange={this.changeHandler} 
                    value={this.state.content}/>
                </form>
            </div>
        );
    }
}

export default AddTodo;