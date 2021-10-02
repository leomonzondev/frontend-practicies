import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-contet">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                >
                    
                </textarea>

                <div className="notes__image">
                    <img 
                    alt="lago canoas"
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"></img>
                    
                </div>
            </div>

        </div>
    )
}
