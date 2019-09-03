import React from 'react';

class TodoForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newtodo: ""
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newtodo);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                        name="newtodo"
                        placeholder="...todo"
                        onChange={this.handleChange}
                        value={this.state.newtodo}
                />
                <button type="submit">Add Todo</button>
            </form>
        )
    }
}

export default TodoForm