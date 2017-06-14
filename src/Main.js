import React from 'react'
import './Main.css'

import Sidebar from './SideBar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import './Main.css'

const Main = () => {
    return (
        <div className="Main">
            <Sidebar/>
            <NoteList/>
            <NoteForm/>
        </div>
    )
}
export default Main