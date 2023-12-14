import axios from 'axios'

export const URL_REQUEST = {
  DETAILS: '/c28cad74-8e74-4e2c-af51-9260453dc2c1',
  MENU: '/d2122738-a617-46de-bc79-5c30af616d20'
}

export const api = axios.create({
  baseURL: 'https://run.mocky.io/v3',
})