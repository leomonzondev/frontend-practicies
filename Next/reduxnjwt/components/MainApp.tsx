import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewNoteInput } from './NewNoteInput'




export const MainApp = () => {


    const onAddNote = (note: string) => {
        
    }

  return (
    <div>
        <NewNoteInput addNote={onAddNote}/>
    </div>
  )
}
