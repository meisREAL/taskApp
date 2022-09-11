import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasks: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ task: event.target.value });
        // this.setState(this.state.tasks.concat(this.state.task))
        // console.log(this.state.tasks)
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ tasks: this.state.tasks.concat(this.state.task) });
        console.log(this.state.tasks)
        // event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Task:
                        <input type="text" value={this.state.task} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}



//======================================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)