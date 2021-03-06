/* eslint-disable no-undef */
import { API_URL } from '../.env'
import axios from 'axios'

import BaseService from './base.service'


export function getToken () {
    return localStorage.getItem('token')
}


export async function getOne(id) {
    const video = await axios.get(`${API_URL}/video/${id}`)
    return video.data
}

export async function getAll() {
    const video = await axios.get(`${API_URL}/video`)
    return video
}

class VideoService extends BaseService {
  get entity () {
    return 'video'
  }

  getVideos (key) {
    const token = getToken()

    const user = this.request({ auth: true }).get(`/${this.entity}`, { token, key })
    return user
  }

  crawl () {
    const token = getToken()

    const video = this.request({ auth: true }).get(`/${this.entity}/crawl`, { token })
    return video
  }
}

export default new VideoService()
