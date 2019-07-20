import React, { Component } from 'react';
import Second from './Second';
import AddPerson from './AddPerson';

class First extends Component {
    /*state =  {
        name : 'Hrimlaland',
        age : 26
    }
    clickHandler (event) {
        console.log(event.target);
    }

    clickHandler = () => {
        console.log(this.state);
        this.setState({
            name: 'Abdelmounaim',
            age : 26
        });
        console.log(this.state);

    }*/
    state = {
        persons : [
            {id: 1, name:'Name 1', last: "Last 1", age : 11},
            {id: 2, name:'Name 2', last: "Last 2", age : 22},
            {id: 3, name:'Name 3', last: "Last 3", age : 33},
            {id: 4, name:'Name 4', last: "Last 4", age : 44},
        ]
    }

    addPerson = (person) => {
        //conole.log(person);
        person.id = Math.random();
        let persons = [...this.state.persons, person];
        this.setState({
            persons : persons
        })
        //console.log(person);
    }

    deletePerson = (id) => {
        //console.log('GGG ' +id);
        let persons = this.state.persons.filter(person => {
            return person.id !== id
        });
        this.setState({
            persons: persons
        });
    }

    componentDidMount() {
        console.log('Did Mount');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Did Update');
        console.log(prevProps, prevState);
    }
    render() {
        return (
            <div className="first-content">
                {/*<h1>First Here</h1>
                <p>My Name is { this.state.name } and I am
                { this.state.age } 
                </p>
                <button onClick={this.clickHandler}>Click Here</button>*/}
                <Second
                persons={this.state.persons}
                deletePerson = {this.deletePerson}
                />
                <hr />
                <AddPerson 
                addPerson={this.addPerson}/>
            </div>
        );
    }
}

export default First;