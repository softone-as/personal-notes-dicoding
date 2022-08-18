import autoBind from 'auto-bind';
import React from 'react';

class NoteAppHeader extends React.Component {
	constructor(props) {
		super(props);

		// inisialisasi state
		this.state = {
			keyword: '',
		};

		autoBind(this);
	}

	onKeywordChangeEventHandler(event) {
		this.setState(
			() => {
				return {
					keyword: event.target.value,
				};
			},
			() => {
				this.onSearchEventHandler(this.state.keyword);
			}
		);
	}

	onSearchEventHandler(keyword) {
		this.props.searchNote(keyword);
	}

	render() {
		return (
			<div className='note-app__header'>
				<h1>Notes</h1>
				<div className='note-search'>
					<input
						type='text'
						placeholder='Cari catatan ...'
						value={this.state.keyword}
						onChange={this.onKeywordChangeEventHandler}
					/>
				</div>
			</div>
		);
	}
}

export default NoteAppHeader;
