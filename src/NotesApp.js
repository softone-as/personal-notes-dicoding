import autoBind from 'auto-bind';
import React from 'react';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';
import { getInitialData } from './utils';

class NotesApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
			searchedNote: [],
			keyword: '',
		};

		autoBind(this);
	}

	onAddNoteHandler({ title, body }) {
		let latestId = this.state.notes.length + 1;
		this.setState((prevState) => {
			return {
				notes: [
					{
						id: latestId,
						createdAt: +new Date(),
						title,
						body,
						archived: false,
					},
					...prevState.notes,
				],
			};
		});
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({ notes });
	}

	onArchiveHandler(id) {
		this.setState((prevState) => {
			const notes = prevState.notes.map((note) => {
				if (note.id === Number(id)) {
					return { ...note, archived: !note.archived };
				}
				return note;
			});

			return { notes };
		});
	}

	onSearchHandler(keyword) {
		this.setState({ keyword });
	}

	render() {
		const filteredNotes = this.state.notes.filter((note) =>
			note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
		);

		return (
			<>
				<NoteAppHeader searchNote={this.onSearchHandler} />
				<NoteAppBody
					notes={filteredNotes}
					onDelete={this.onDeleteHandler}
					onArchive={this.onArchiveHandler}
					addNote={this.onAddNoteHandler}
				/>
			</>
		);
	}
}

export default NotesApp;
