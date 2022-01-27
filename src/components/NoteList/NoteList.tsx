import * as React from 'react';
import { Note } from '../../models/note.model';
import Notes from '../Notes/Notes';
import './NoteList.css'

interface INoteListProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }
    const renderNotes = ():JSX.Element[] => {
        return  notes.map(note => {
            return <Notes key={note.id} note={note} handleDelete={ handleDelete}/>
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
