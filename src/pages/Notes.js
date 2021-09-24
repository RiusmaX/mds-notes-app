import React from 'react';
import FAB from '../components/FAB';
import NoteList from '../components/NoteList';
import NoteModal from '../components/NoteModal';
import { getNotes } from '../services/api'

class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      isModalOpen: false,
      noteToEdit: null
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

  setNoteToEdit = (note) => {
    console.log('App.js / setNoteToEdit')
    this.setState({noteToEdit: note})
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.getData()
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  getData = async () => {
    const notes = await getNotes()
    this.setState({notes})
  }

  render() {
    return (
      <div>
        <NoteModal 
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          noteToEdit={this.state.noteToEdit}
        />
        <NoteList
          notes={this.state.notes}
          setNoteToEdit={this.setNoteToEdit}
          openModal={this.openModal}
        />
        <FAB
          openModal={this.openModal}
          setNoteToEdit={this.setNoteToEdit}
        />
      </div>
    )
  }
}

export default Notes;
