import React from 'react'
import Draggable from 'react-draggable';
import NoteActions from './NoteActions';
import './styles/Note.css'

class Note extends React.Component {
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
          <NoteActions isFavorite={this.props.note.isFavorite} />
        </div>
      </Draggable>
    )
  }
}

export default Note