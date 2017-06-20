import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    constructor(props){
      super(props)

      this.state = {
        note: this.blankNote(),
      }
    }

    blankNote = () =>{
      return {
        id: null,
        title: '',
        body: '',
      }
    }

    handleChanges=(ev)=> {
     // console.log(ev.target.value)
     const note = {...this.state.note}
     note[ev.target.name]=ev.target.value
     this.setState({note}, ()=>this.props.saveNote(this.state.note))
    }

    handleRemove = (ev) => {
      this.props.removeNote(this.props.currentNote)
    }

    render(){
    return (
    <div className="NoteForm">
        <form>
          <p>
            <input type="text" name="title" placeholder="Title your note" onChange={this.handleSubmit} value={this.state.note.title}/>
          </p>
          <p>
            <textarea name="body" placeholder="Just start typing..." onChange={this.handleChanges} value={this.state.note.title}></textarea>
          </p>
          <button type="submit"></button>
          <button>
            <i className="fa fa-trash-on"></i>
          </button>
        </form>
      </div>
    )
}
}
export default NoteForm