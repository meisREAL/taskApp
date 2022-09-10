import React from 'react';
import ReactDOM from 'react-dom/client';

class InputField extends React.Component {
    render() {
        return (
            <input className='taskInput'>

            </input>
        );
    }
}

// class SubmitButton extends React.Component {
//     render() {
//         return (
//             <button className='submit' onClick={this.props.onClick}>Submit</button>
//         )
//     }
// }

function SubmitButton(props) {
    return (
        <button className='submit' onClick={props.onClick}>Submit</button>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                tasks: Array(),
            }],
        }
    }
    handleClick(input) {
        const taskList = this.state.list.slice();
        const current = taskList[taskList.length - 1];
        const task = current.tasks.slice();
        this.setState({
            taskList: taskList.concat([{
                tasks: task.concat(input),
            }]),
        });
        console.log(this.state.list)
    }
    render() {
        return (
            <div className='appBoard'>
                <div className='inputs'>
                    <InputField />
                    <SubmitButton />
                </div>
                <div className='tasks'>

                </div>
            </div>
        );
    }
}

//======================================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)