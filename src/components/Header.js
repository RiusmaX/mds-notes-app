import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/notes'>Notes</Link>
            </li>
            <li>
              <Link to='/about'>A propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header;
