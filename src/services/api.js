const getNotes = async () => {
  const response = await window.fetch('https://strapi.myidea.fr/notes')
  const result = await response.json()
  return result
}

const addNote = async (note) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note)
  }
  try {
    const response = await window.fetch('https://strapi.myidea.fr/notes', options)
    const result = await response.json()
    console.log(result)
  } catch (e) {
    console.error(e)
  }
}

const deleteNote = async (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const response = await window.fetch(`https://strapi.myidea.fr/notes/${id}`, options)
    const result = await response.json()
    console.log(result)
  } catch (e) {
    console.error(e)
  }
}

const updateNote = async (note) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  }
  console.log(note)
  try {
    const response = await window.fetch(`https://strapi.myidea.fr/notes/${note._id}`, options)
    const result = await response.json()
    console.log(result)
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  getNotes,
  addNote,
  deleteNote,
  updateNote
}