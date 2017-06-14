import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
