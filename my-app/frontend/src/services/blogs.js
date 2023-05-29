import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (newObject) => {
  const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
  const response = await request
  return response.data
}

const remove = async (newObject) => {
  const config = {
    headers: { Authorization: token }
  }

  const request = axios.delete(`${baseUrl}/${newObject.id}`, config)
  const response = await request
  return response.data
}

const comment = async (id, comment) => {
  console.log(comment)
  const response = await axios.post(`${baseUrl}/${id}/comments`, { comment })
  return response.data
}

export default {
  getAll,
  create,
  update,
  remove,
  comment,
  setToken
}
