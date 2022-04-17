import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../state/actions'
import { NotesState } from '../state/cardReducer'
import { NewNoteInput } from './NewNoteInput'




export const MainApp = () => {

  const notes = useSelector<NotesState, NotesState["notes"]>(
    state => state.notes
  )

  const dispatch = useDispatch()

    const onAddNote = (note: string) => {
        dispatch(addNote(note))
    }

  return (
    <div>
        <NewNoteInput addNote={onAddNote}/>
        <hr />
        <ul>
          {notes.map((note) => {
            return <li key={note}>{note}</li>
          })}
        </ul>
    </div>
  )
}
