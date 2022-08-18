import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArchive }) {
	const notesArchived = notes.filter((note) => note.archived === true);
	const notesActive = notes.filter((note) => note.archived === false);

	return (
		<>
			<h2>Catatan Aktif</h2>
			<div className='notes-list'>
				{notesActive.length ? (
					notesActive.map((note) => (
						<NoteItem
							key={note.id}
							{...note}
							id={note.id}
							onDelete={onDelete}
							onArchive={onArchive}
						/>
					))
				) : (
					<p className='notes-list__empty-message'>
						Tidak ada catatan
					</p>
				)}
			</div>
			<h2>Arsip</h2>
			<div className='notes-list'>
				{notesArchived.length ? (
					notesArchived.map((note) => (
						<NoteItem
							key={note.id}
							{...note}
							id={note.id}
							onDelete={onDelete}
							onArchive={onArchive}
							buttonText={'Pindahkan'}
						/>
					))
				) : (
					<p className='notes-list__empty-message'>
						Tidak ada catatan
					</p>
				)}
			</div>
		</>
	);
}
