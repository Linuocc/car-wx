//app.js
App({
  globalData:{


  },
  onLaunch(){
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success:(res)=>{
        console.log(res)
        Object.assign(this.globalData,res.data)
        const currentPages = getCurrentPages()
        if(currentPages.length!==0){
          currentPages[currentPages.length-1].onLoad()
        }

      }
    })
  }
})