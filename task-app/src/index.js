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

class SubmitButton extends React.Component {
    render() {
        return (
            <button className='submit'>Submit</button>
        )
    }
}

class App extends React.Component {
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