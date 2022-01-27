import * as React from 'react';
import { Note } from '../../models/note.model';
import Notes from '../Note/Notes';
import './NoteList.css'

interface INoteListProps {
    notes: Note[]; 
}

const NoteList: React.FC<INoteListProps> = ({ notes }) => {
    const renderNotes = ():JSX.Element[] => {
        return  notes.map(note => {
        return   <Notes key={note.id} note={ note}/>
        })
    }
    return(
        <>
            <div className="notes">
                <h2>Notes</h2>
                <div>{renderNotes()}</div>
            </div>
        </>
    ) ;
};

export default NoteList;
