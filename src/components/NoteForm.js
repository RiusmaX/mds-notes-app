import React from 'react';

import { addNote, updateNote } from '../services/api'

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.noteToEdit ? props.noteToEdit.title : '',
      content: props.noteToEdit ? props.noteToEdit.content : ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault() // Empêcher le comportement naturel du navigateur
    console.log(`formulaire soumis ! ${this.state.title} ${this.state.content}`)
    if (this.props.noteToEdit) {
      const note = {
        ...this.props.noteToEdit,
        title: this.state.title,
        content: this.state.content
      }
      await updateNote(note)
    } else {
      await addNote(this.state)
    }
    this.props.closeModal()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Titre : 
            <input name='title' onChange={this.handleChange} value={this.state.title} />
          </label>
          <label>
            Contenu : 
            <textarea name='content' onChange={this.handleChange} value={this.state.content} />
          </label>
          <input type='submit' value={this.props.noteToEdit ? 'Mettre à jour la note' : 'Ajouter la note'} />
        </form>
      </div>
    )
  }
}

export default NoteForm;
