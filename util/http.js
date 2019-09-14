import {config}  from '../config.js'

const tips = {
  1:"网络异常-请检查你的网络",
  1005:'不正确的开发者key',
  3000:"该期内容不存在"
}

class HTTP {
  request(params){
    if(!params.method){
      params.method ="GET"
    }
    wx.request({
      url:config.api_base_url+params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type': 'application/json',
        'appkey':config.appkey
      },
      success:(res)=>{
        let code = res.statusCode.toString()
        if (code.startsWith('2')){
          params.success(res.data)
        }else {
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail:()=>{
        this._show_error(1)
        // wx.showToast({
        //   title: '错误',
        //   icon:'none',
        //   duration:2000
        // })
      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      error_code =1
    }
    wx.showToast({
      title:tips[error_code],
      icon:'none',
      duration:2000
    })
  }
}


export {HTTP}