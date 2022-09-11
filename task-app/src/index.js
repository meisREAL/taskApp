import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Overview from './components/Overview';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                text: '',
            },
            tasks: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        // this.setState({ task: event.target.value });
        // this.setState(this.state.tasks.concat(this.state.task))
        this.setState({
            task: {
                text: event.target.value,
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                text: '',
            }
        });
        console.log(this.state.tasks)
        // event.preventDefault();
    }
    render() {
        // const { task, tasks } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Task:
                        <input type="text" value={this.state.task.text} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Overview tasks={this.state.tasks} />
            </div>
        );
    }
}



//======================================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)