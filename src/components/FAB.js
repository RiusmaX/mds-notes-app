import React from 'react';

import './styles/FAB.css'

class FAB extends React.Component {
  handleClick = () => {
    this.props.setNoteToEdit(null)
    this.props.openModal()
  }

  render() {
    return (
      <div onClick={this.handleClick} className='fab-container'>
        +
      </div>
    )
  }
}

export default FAB;
