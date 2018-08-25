const utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const movie = options;
    console.log(movie)
    this.setData({
      movie
    })
  },

  viewBtnClick: function(e) {
    wx.navigateTo({
      url: '../review-list/review-list'
    })
  }, 

  addBtnClick: function(e) {
    wx.showActionSheet({
      itemList: ['文字', '音频'],
      success: function(res) {
        if(res.tapIndex == 0) {
          wx.navigateTo({
            url: '../review-edit/review-edit?editType=文字'
          })
        } else if (res.tapIndex == 1) {
          wx.navigateTo({
            url: '../review-edit/review-edit?editType=音频'
          })
        }
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  }

})