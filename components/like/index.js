// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    yesLike:'./images/like.png',
    noLike:'./images/like@dis.png',
    count:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function (e){
    this.setData({
      count:this.data.count===0 ? this.data.count+1:this.data.count-1
    })
    }
  }
})
