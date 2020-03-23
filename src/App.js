import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p> Hi there! </p> <h1> How Are You doing bro ? </h1>{' '}
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Where ?
                </a>{' '}
            </header>{' '}
        </div>
    )
}

export default App
