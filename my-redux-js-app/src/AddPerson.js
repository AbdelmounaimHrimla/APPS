import React, { Component } from 'react';

class AddPerson extends Component {
    state = {
        name: null,
        last: null,
        age: null,
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.addPerson(this.state);
    }
    render() {
        return (
            <div className="addPerson-content">
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name :</label>
                    <input type="text" id="name" onChange={this.changeHandler} />
                    <label htmlFor="last">Last :</label>
                    <input type="text" id="last" onChange={this.changeHandler} />
                    <label htmlFor="age">Age :</label>
                    <input type="text" id="age" onChange={this.changeHandler} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPerson;