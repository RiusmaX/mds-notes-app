import React from 'react';

import { addNote } from '../services/api'

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      content: ''
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
    await addNote(this.state)
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
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default NoteForm;
