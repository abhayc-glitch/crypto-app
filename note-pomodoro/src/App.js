import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
	]);
  const [searchText, setSearchText] = useState('');


	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	

  return(
    <div className="container">
	  <Header />
      <Search handleSearchNote = {setSearchText}/>
	  <NotesList notes = {notes.filter((note) => note.text.includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  )
}

export default App;


