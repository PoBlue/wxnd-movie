//index.js
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config')


Page({
  data: {
    isLoading: false,
    moviesList: [],
    errorMsg: '',
  },

  onLoad: function(options) {
    qcloud.request({
      url: config.service.hotMoviesUrl,
      success: result => {
        this.setData({
          moviesList: result.data.data
        })
      },
      fail: result => {
        wx.showModal({ title: '返回错误', content: '请求失败', showCancel: false });
      }
    })
  }
})
