import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Ok58bi8EoFrPEplnuLU0x3V9oLVQZP14bW09tKUx7gtLAOYpj8TJl6XUvX1WXn6S7j8TG27g1gZDFvaPfGhWOsznW7sr04VdUPSZLToXiMM9bOytjSHdHiNvpz7pX3Yx'
  }
})