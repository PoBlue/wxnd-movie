// pages/main-page/main-page.js
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {
      "id": 1,
      "title": "复仇者联盟3：无限战争",
      "image": "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg", "category": "动作 / 科幻 / 奇幻 / 冒险", "description": "《复仇者联盟3：无限战争》是漫威电影宇宙10周年的历史性集结，将为影迷们带来史诗版的终极对决。面对灭霸突然发起的闪电袭击，复仇者联盟及其所有超级英雄盟友必须全力以赴，才能阻止他对全宇宙造成毁灭性的打击。",
      "create_time": "2018-06-27T07:05:21.000Z"
    },
    review: {
      movieId: 1,
      imageUrl: "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg",
      name: "名字1",
      dataType: "文字",
      text: "一些文字,一些文字一些文字一些文字一些文字",
      voice: "15s"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const movieId = 1;
    qcloud.request({
      url: config.service.reviewsUrl+ movieId,
      success: result => {
        console.log(result)
      },
      fail: result => {
        console.log(result)
      }
    })
  },

  posterClick: function(e) {
    wx.navigateTo({
      url: '../movie-detail/movie-detail'
    })
  },

  hotBtnClick: function(e) {
    wx.navigateTo({
      url: '../movie-hot-list/movie-hot-list'
    })
  },

  mineBtnClick: function(e) {
    wx.navigateTo({
      url: '../review-mine/review-mine'
    })
  },

  personClick: function(e) {
    wx.navigateTo({
      url: '../review-detail/review-detail'
    })
  }
})