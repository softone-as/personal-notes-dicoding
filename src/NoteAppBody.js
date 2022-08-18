import NoteList from './NoteList';
import NoteInput from './NoteInput';

export default function NoteAppBody({ notes, onDelete, onArchive, addNote }) {
	return (
		<div className='note-app__body'>
			<NoteInput addNote={addNote} />
			<NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} />
		</div>
	);
}
