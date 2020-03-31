import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl, 
  headers: {
    authorization: localStorage.getItem('authToken')
  }
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}


const getAllPedals = async () => {
  const resp = await api.get('/pedals')
  return resp.data
}

const createPedal = async (data) => {
  const resp = await api.post('/pedals', { pedal: data })
  return resp.data
}


const updatePedal = async (id, data) => {
  const resp = await api.put(`/pedals/${id}`, { pedal: data })
  return resp.data
}

const destroyPedal = async (id) => {
  const resp = await api.delete(`/pedals/${id}`)
  return resp.data
}



export {
  getAllPedals,
  createPedal,
  updatePedal,
  destroyPedal
}
