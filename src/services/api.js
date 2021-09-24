const getNotes = async () => {
  const response = await window.fetch('https://strapi.myidea.fr/notes')
  const result = await response.json()
  console.log(result)
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

module.exports = {
  getNotes,
  addNote
}