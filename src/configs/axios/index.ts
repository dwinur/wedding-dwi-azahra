import * as Axios from 'axios'
import axios from 'axios'
import _ from 'humps'

export default function InstanceAxios(config: Axios.CreateAxiosDefaults) {
  const instance = axios.create(config)
  instance.interceptors.request.use((req) => {
    const newConfig = { ...req }

    if (newConfig.headers['Content-Type'] === 'multipart/form-data') return newConfig

    if (req.params) {
      newConfig.params = _.decamelizeKeys(req.params)
    }

    if (req.data) {
      newConfig.data = _.decamelizeKeys(req.data)
    }

    return newConfig
  })
  instance.interceptors.response.use(
    (e) => _.camelizeKeys(e.data.data) as Axios.AxiosResponse,
    (err: Axios.AxiosError) => {
      return Promise.reject(err)
    },
  )
  return instance
}
