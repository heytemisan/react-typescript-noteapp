import * as React from 'react';
import { Note } from '../../models/note.model';

interface INotesProps {
    note: Note
}

const Notes: React.FC<INotesProps> = ({note}) => {
    return (
        <>
            <div className="card_body">
                <div className="note">
                    <div className="card">
                        <div className="card_title">{note.title}</div>
                        <div className="card_text">{note.text}</div>
                        <div className="card_subtitle muted">{note.date}</div>
                        <button className="btn danger">Delete</button>
                    </div> 
                </div>
            </div>
            
        </>
    ) ;
};

export default Notes;
