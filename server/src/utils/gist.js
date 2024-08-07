<<<<<<< HEAD
import axios from 'axios'

async function createGist(data) {
  const response = await axios.post('https://api.github.com/gists', data)
  return response.data
}

=======
import axios from 'axios'

async function createGist(data) {
  const response = await axios.post('https://api.github.com/gists', data)
  return response.data
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export {createGist}