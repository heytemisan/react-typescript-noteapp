import * as React from 'react';
import { Note } from '../../models/note.model';
import "./Notes.css"

interface INotesProps {
    note: Note,
    handleDelete:(id: string) => void
}

const Notes: React.FC<INotesProps> = ({note, handleDelete}) => {
    return (
        <>
            <div className="note" style={{backgroundColor: note.color}}>
                <div className="card_body">
                    <div className="card_title">{note.title}</div>
                    <div className="card_text">{note.text}</div>
                    <div className="card_subtitle muted">{note.date}</div>
                    <button className="btn danger" onClick={() => {
                        handleDelete(note.id)
                    }}>Delete</button>
                </div> 
            </div>
        </>
    ) ;
};

export default Notes;
