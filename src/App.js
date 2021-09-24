import React from 'react';
import Modal from 'react-modal'
import './App.css';
import FAB from './components/FAB';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';
import { getNotes } from './services/api'

Modal.setAppElement('#root')
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      isModalOpen: false
    }
  }

  openModal = () => {
    console.log('Open modal')
    this.setState({isModalOpen: true})
  }

  closeModal = () => {
    console.log('Close modal')
    this.setState({isModalOpen: false})
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const notes = await getNotes()
    this.setState({notes})
  }

  render() {
    return (
      <div className="App">
        <NoteModal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} />
        <NoteList notes={this.state.notes} />
        <FAB openModal={this.openModal} />
      </div>
    )
  }
}

export default App;
