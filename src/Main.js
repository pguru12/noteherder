import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
    props.notes
    return (
        <nav className="Sidebar">
        <div className="Main">
            <Sidebar/>
            <NoteList notes={props.notes}/>
            <NoteForm saveNote={props.saveNote}/>
        </div>
        </nav>
    )
}
export default Main