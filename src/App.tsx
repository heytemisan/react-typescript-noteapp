import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Note } from './models/note.model';
import Header from './components/Header/Header';
import NoteList from './components/NoteList/NoteList';
import CreateNotes from './components/CreateNotes/CreateNote';
import { Footer } from './components/Footer/Footer';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "meetings",
    text: "hello to the teams",
    color: "#C1C1C1",
    date:(new Date).toString()
    }])

  return (
    <>
      <div className="App">
        <Header />
        <NoteList notes={notes} setNotes={setNotes} />
        <CreateNotes notes={notes} setNotes={setNotes} />
        <Footer/>
    </div>
    </>
  );
}

export default App;
