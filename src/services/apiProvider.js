import { Constants } from "./constantsProvider"
import axios from "axios"

class API {
  constructor() {
    this.call = this.call.bind(this)
    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
    this.del = this.del.bind(this)
    this.options = this.options.bind(this)
    this.patch = this.patch.bind(this)
    this.put = this.put.bind(this)
    this.update = this.update.bind(this)
  }

  call = (method, url, data, config) => {
    return new Promise(async (resolve, reject) => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: data ?? undefined,
          withCredentials: true,
          baseURL: Constants.BASE_URL,
          ...config,
        })
        console.log(resp)
        resolve(resp)
      } catch (err) {
        console.log(err)
        if (err?.response?.status && err.response.status === 418) {
          try {
            const res = await axios({
              method: "post",
              url: "/user/refresh",
              withCredentials: true,
              baseURL: Constants.BASE_URL,
            })
            console.log(res)
            const r = await axios({
              method: method,
              url: url,
              data: data ?? undefined,
              withCredentials: true,
              baseURL: Constants.BASE_URL,
              ...config,
            })
            console.log(r)
            resolve(r)
          } catch (e) {
            console.log(e)
            reject(e)
          }
        } else {
          reject(err)
        }
      }
    })
  }

  get = (url, data, config) => {
    return this.call("get", url, config)
  }

  post = (url, data, config) => {
    return this.call("post", url, data, config)
  }

  update = (url, data, config) => {
    return this.call("update", url, data, config)
  }

  patch = (url, data, config) => {
    return this.call("patch", url, data, config)
  }

  put = (url, data, config) => {
    return this.call("put", url, data, config)
  }

  del = (url, data, config) => {
    return this.call("delete", url, data, config)
  }

  options = (url, data, config) => {
    return this.call("options", url, data, config)
  }
}

const api = new API()

export default api;