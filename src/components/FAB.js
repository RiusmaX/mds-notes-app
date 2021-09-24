import React from 'react';

import './styles/FAB.css'

class FAB extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.openModal()} className='fab-container'>
        +
      </div>
    )
  }
}

export default FAB;
