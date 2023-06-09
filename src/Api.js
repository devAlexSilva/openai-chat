import axios from 'axios'

const key = import.meta.env.VITE_API_KEY
const url = 'https://api.openai.com/v1/completions'
const responseConfig = {
  model: "text-davinci-003",
  prompt: '',
  max_tokens: 1048,
  temperature: .1,
  n: 3
}

const api = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`
  }
})

export const Api = (question) => {
  responseConfig.prompt = question
  return api.post(url, JSON.stringify(responseConfig))
}