import React, { Component } from 'react'
import Note from './Note'

import './styles/NoteList.css'

class NoteList extends Component {
  render() {
    if (!this.props.notes || this.props.notes.length < 1) {
      return (
        <p>Aucune note</p>
      )
    }
    return(
      <div className='notes-container'>
        {this.props.notes.map((note) => {
          return <Note {...this.props} key={note._id} note={note} />
        })}
      </div>
    )
  }
}

export default NoteList