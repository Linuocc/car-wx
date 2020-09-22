// pages/show/show.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    entity:null
  },
  onLoad: function (options) {
    const id = options.id;
    const entity = app.globalData.stories.filter(function (item) {
      return item.id == id
    })
    this.setData({
      entity: entity[0]
    })
    wx.setNavigationBarTitle({
      title: this.data.entity.header
    })
  }
  
})