import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

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

  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null
    this.setState({ notes }, ()=>this.resetCurrentNote)
  }

  signedIn = () => {
    return this.state.uid
  }

  componentWillMount(){
    auth.onAuthStateChanged(
      (user) => {
        if (user){
          this.authHander(user)
        }
        else {
          this.setState({uid: null, notes: {} })
        }
      }
    )
  }

  setCurrentNote = () => {

  }

  resetCurrentNote = () => {
    this.setCurrentNote(note)
  }

  signOut = () => {
    auth.
    signOut().
    then(
      ()=>{
        base.removeBinding(this.ref)
        .setState({})})
  }

  authHander = (user) => {
    this.setState(
      { uid: user.uid })
  }

  renderMain=()=>{
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
    }

    return (
      <div className="Main">
        <Sidebar />
        <NoteList />
      </div>
    )
  }

    return (
      // <div className="App">
      //   <Switch>
      //     <Route path="/notes" render={()=>(<Main {...noteData}{...actions}/>)} />
      //     <Route path="sign-in" component={SignIn}/>
      //     <Route render={()=><Redirect to="/notes"/>}/>
      //   </Switch>
      // </div>
    )
}
export default App;
