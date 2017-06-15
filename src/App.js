import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import Main from './Main'

class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: {
        'note-1':{
          id: 'note-1',
          title: 'Thoughts on React',
          body: 'React is nifty'
        },
        'note-2':{
          id: 'note-2',
          title: 'State and props?',
          body: 'Wat',
        },
      },
    }
  //  this.notes['note-1']
  }

  saveNote(note){
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({  notes })
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} saveNote={this.saveNote}/>
      </div>
    );
  }
}

export default App;
