import React from 'react';

import './styles/NoteActions.css'

class NoteActions extends React.Component {
  render() {
    return (
      <div className='actions-container'>
        <button>{this.props.isFavorite ? '❤️' : '🤍'}</button>
      </div>
    )
  }
}

export default NoteActions;
