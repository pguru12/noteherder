import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import Main from './Main'
import SignIn from './SignIn'
import base from './base'

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

componentWillMount(){
  base.syncState(
    'notes',
    {
      context: this,
      state: 'notes',
    }
  )
}

  saveNote(note){
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({  notes })
  }

  signedIn = () => {
    return false
  }

  renderMain=()=>{
    return <Main notes={this.state.notes} saveNote={this.saveNote}/>
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn /> }
      </div>
    );
  }
}

export default App;
