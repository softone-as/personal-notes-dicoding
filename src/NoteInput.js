import autoBind from 'auto-bind';
import React from 'react';

class NoteInput extends React.Component {
	constructor(props) {
		super(props);

		// inisialisasi state
		this.state = {
			title: '',
			body: '',
			textLeft: 50,
		};

		autoBind(this);
	}

	onTitleChangeEventHandler(event) {
		this.setState(() => {
			return {
				title: event.target.value,
				textLeft: 50 - event.target.value.slice(0, 50).length,
			};
		});
	}

	onBodyChangeEventHandler(event) {
		this.setState(() => {
			return {
				body: event.target.value,
			};
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();

		if (this.state.body === '' || this.state.title === '') {
			return alert('Title dan Body harus diisi');
		}

		this.props.addNote(this.state);
		this.setState(() => {
			return {
				title: '',
				body: '',
				textLeft: 50,
			};
		});
	}

	render() {
		return (
			<div className='note-input'>
				<h2>Buat Catatan</h2>
				<form
					className='contact-input'
					onSubmit={this.onSubmitEventHandler}
				>
					<p className='note-input__title__char-limit'>
						Sisa Karakter: {this.state.textLeft}
					</p>
					<input
						type='text'
						placeholder='Ini adalah judul ...'
						className='note-input__title'
						value={this.state.title}
						onChange={this.onTitleChangeEventHandler}
						onKeyDown={(e) => {
							if (this.state.title.length >= 50) {
								if (e.keyCode !== 8 && e.keyCode !== 46) {
									e.preventDefault();
									return false;
								}
							}
						}}
					/>
					<textarea
						placeholder='Tuliskan catatanmu di sini ...'
						className='note-input__body'
						value={this.state.body}
						onChange={this.onBodyChangeEventHandler}
					/>
					<button type='submit'>Buat</button>
				</form>
			</div>
		);
	}
}

export default NoteInput;
