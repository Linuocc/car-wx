// pages/index/index.js
import testDrive from "../../modules/test-drive.js";

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:null,
    entities:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      slides:app.globalData.slides,
      entities:app.globalData.vehicles
    })
  },
  readMore(event){
    wx.navigateTo({
      url: `/pages/vehicles/vehicles?id=${event.target.dataset.id}`,
    })
  },
  testDrive
  
  
})