const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    entities: null,
    currentVid: null,
    currentVideo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      entities: app.globalData.stories
    })
  },
  play(event) {
    if (this.data.currentVid !== null) {
      this.data.currentVideo.pause()
    }


    const currentVideo = wx.createVideoContext(`${event.target.dataset.vid}`);
    currentVideo.play();
    this.setData({
      currentVideo,
      currentVid: event.target.dataset.vid
    })

  }
})