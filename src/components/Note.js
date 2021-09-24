import React from 'react'
import Draggable from 'react-draggable';
import NoteActions from './NoteActions';
import './styles/Note.css'

import { deleteNote, updateNote } from '../services/api'
class Note extends React.Component {

  handleDelete = async () => {
    if(window.confirm('Voulez-vous vraiment supprimer ?')) {
      await deleteNote(this.props.note._id)
    }
  }

  handleEdit = async () => {
    this.props.setNoteToEdit(this.props.note)
    this.props.openModal()
  }

  toggleFavorite = async () => {
    const note = {
      ...this.props.note,
      isFavorite: !this.props.note.isFavorite
    }
    await updateNote(note)
  }

  render() {
    if (!this.props.note) {
      return (
        <p>Pas de donnée</p>
      )
    }
    return (
      <Draggable>
        <div className={`note-container ${this.props.note.isEnabled && 'enabled'}`}>
          <h2>{this.props.note.title}</h2>
          <div className='separator'/>
          <p className='content'>{this.props.note.content}</p>
          <button onClick={this.handleEdit}>✏️</button>
          <button onClick={this.handleDelete}>🗑</button>
          <button onClick={this.toggleFavorite}>{this.props.note.isFavorite ? '❤️' : '🤍'}</button>
          {/* <NoteActions isFavorite={this.props.note.isFavorite} /> */}
        </div>
      </Draggable>
    )
  }
}

export default Note