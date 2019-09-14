import {HTTP} from '../util/http.js'
class ClassicModel extends HTTP {
  getLates(sCallback){
    this.request({
      url: "classic/latest",
      success: (res) => {
        sCallback(res)
      }
    })
  }
}

export {ClassicModel}