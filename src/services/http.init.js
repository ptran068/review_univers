import axios from 'axios'

import * as authService from '../services/auth.service'
import { API_URL } from '../.env'

export default class Http {
  constructor (status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create({
      baseURL: API_URL
    })

    return this.init()
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers['Authorization'] = `token ${authService.getToken()}`
        return request
      }, error => {
        return Promise.reject(error)
      })

      return this.instance
    }
    return this.instance
  }
}
