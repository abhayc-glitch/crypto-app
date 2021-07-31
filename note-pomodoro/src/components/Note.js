import React from 'react'
import { TiDocumentDelete } from 'react-icons/ti'

function Note({id,text,date, handleDeleteNote}) {
    return (
        <div className="note">
            <span>
                {text}
            </span>
            <div className="note-footer"> 
                <small>{date}</small>
                <TiDocumentDelete onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
            </div>
        </div>
    )
}

export default Note
