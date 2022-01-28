import * as React from 'react';
import { Note } from '../../models/note.model';

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
        <>
            <h2>Create Notes</h2>
            {error && <div>{ error}</div>}
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-input">
                    <label htmlFor="title">title</label>
                    <input type="text" placeholder='enter title for the note' ref={ titleRef}/>
                </div>
                <div className="form-input">
                    <label htmlFor="title">Text</label>
                    <textarea name="textarea" id="" cols={30} rows={10 } placeholder='enter your note' ref={textRef}></textarea>
                </div>
                <div className="form-input">
                    <label htmlFor="colorInput">Notes Color</label>
                    <input type="color"placeholder='enter color for the note' id="colorInput" defaultValue="#dfdfdf" ref={colorRef}/>
                </div>
                <button type="submit">
                    submit
                </button>
            </form>
        </>
    );
};

export default CreateNotes;
