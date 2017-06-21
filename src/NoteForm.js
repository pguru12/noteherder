import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
    componentWillReceiveProps(nextProps){
      const newId = nextProps.match.params.id

if (newId){
      if (newId !== this.props.currentNote.id && Object.keys(nextProps.note).length>0){
        const note = nextProps.notes[newId]
        if (note){
      this.props.setCurrentNote(note)  
      } else {
        this.props.history.push('/notes/${note.id}')
      }
      }
    }
    else if (this.props.currentNote.id){
      this.props.resetCurrentNote()
    }
    }

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