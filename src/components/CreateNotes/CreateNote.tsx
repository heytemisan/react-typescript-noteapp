import * as React from 'react';
import { Note } from '../../models/note.model';
import "./CreateNote.css"

interface ICreateNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {

    const [error, setError] = React.useState("")
    const titleRef = React.useRef<HTMLInputElement | null>(null);
    const textRef = React.useRef<HTMLTextAreaElement | null>(null);
    const colorRef = React.useRef<HTMLInputElement | null>
        (null);
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (titleRef.current?.value == "" || textRef.current?.value === "") {
            return setError("All fields are mandatory")
        } setError("")
        setNotes([...notes, {
            id: (new Date()).toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date: (new Date()).toString()
        }]);

        (titleRef.current as HTMLInputElement).value = "";
        (titleRef.current as HTMLInputElement).value = "";
    }
    return (
        <div className="form"> 
            <h2>Create Notes</h2>
            {error && <div className="error">{ error}</div>}
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-input title">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input className='input form-control' type="text" placeholder='enter title for the note' ref={ titleRef}/>
                </div>
                <div className="form-input message">
                    <label className="form-label"  htmlFor="title">Text</label>
                    <textarea className='input' name="textarea" id="" cols={30} rows={10 } placeholder='enter your note' ref={textRef}></textarea>
                </div>
                <div className="color-pallete" >
                    <div className="color-bg">
                        <label className='label' htmlFor="colorInput">Notes Color</label>
                    <input  type="color"placeholder='enter color for the note' id="colorInput" defaultValue="#dfdfdf" ref={colorRef}/>
                    </div>
                <button type="submit" className='submit-btn'>
                    submit
                </button>
                </div>
            </form>
        </div>
    );
};

export default CreateNotes;
