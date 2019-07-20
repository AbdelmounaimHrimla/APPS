import React, { Component } from 'react';

class Second extends Component {
    /*state =  {
        name : 'Hrimlaland',
        age : 26
    }

    changeHandler = (event) => {
        this.setState({
            name : event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log('Form Submit ' + this.state.name);
    }*/
    deletePerson = (id) => {
        this.props.deletePerson(id);
    }
    render() {
        //console.log(this.props);
        //const {name, age} = this.props;
        const {persons} = this.props;
        const personsList = persons.map(person => {
            if(person.age > 20 ) {
                return (
                    <div key={person.id} className="listPersons">
                        <hr/>
                        <h2>Name : {person.name}</h2>
                        <h3>Name : {person.last}</h3>
                        <h4>Age : {person.age}</h4>
                        <button onClick={() => {this.deletePerson(person.id)}}>Delete</button>
                    </div>
                )
            } else {
                return null;
            }
          /*  return person.age > 20 ? (
                <div key={person.id} className="listPersons">
                        <hr/>
                        <h2>Name : {person.name}</h2>
                        <h3>Age : {person.age}</h3>
                    </div>
            ) : null;*/
            
        }); 
        return (
            <div className="second-content">
                
                {/*<h1>Second Here</h1><h3>My Name Is <mark>{this.state.name}</mark></h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeHandler} />
                    <button>Submit</button>
                </form>*/}
                {personsList}
                {/*
                    persons.map(person => {
                        return person.age > 20 ? (
                            <div key={person.id} className="listPersons">
                                    <hr/>
                                    <h2>Name : {person.name}</h2>
                                    <h3>Age : {person.age}</h3>
                                </div>
                        ) : null;
                        
                    })
                */}
                
            </div>
        );
    }
}

export default Second;