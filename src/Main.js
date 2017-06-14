import React from 'react'

import Sidebar from './SideBar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

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