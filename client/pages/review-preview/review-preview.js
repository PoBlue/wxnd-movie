// pages/review-preview/review-preview.js
//index.js
var COS = require('../../lib/cos-wx-sdk-v5')
var config = require('./config')
const utils = require('../../utils/util')

var cos = new COS({
  getAuthorization: function (params, callback) {//获取签名 必填参数
    // 方法二（适用于前端调试）
    var authorization = COS.getAuthorization({
      SecretId: config.SecretId,
      SecretKey: config.SecretKey,
      Method: params.Method,
      Key: params.Key
    });
    callback(authorization);
  }
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
    review: {}
  },


  onLoad: function(options) {
    const movie = utils.getMovieOpt(options)
    const review = utils.getReviewOpt(options)

    this.setData({
      movie,
      review
    })

    //创建 ctx for 播放器
    this.innerAudioCTX = wx.createInnerAudioContext()
  },

  reEditBtnClick: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },

  requestCallback: function (err, data) {
    console.log(err || data);
    if (err && err.error) {
      wx.showModal({ title: '返回错误', content: '请求失败：' + err.error.Message + '；状态码：' + err.statusCode, showCancel: false });
    } else if (err) {
      wx.showModal({ title: '请求出错', content: '请求出错：' + err + '；状态码：' + err.statusCode, showCancel: false });
    } else {
      wx.showToast({ title: '请求成功', icon: 'success', duration: 3000 });
    }
  },

  sendReviewBtnClick: function () {
    const _this = this;
    // 选择文件
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var filePath = res.tempFilePaths[0]
        var Key = "test" // 这里指定上传的文件名

        cos.postObject({
          Bucket: config.Bucket,
          Region: config.Region,
          Key: Key,
          FilePath: filePath,
          onProgress: function (info) {
            console.log(JSON.stringify(info));
          }
        }, _this.requestCallback);
      }
    })
  },

  onTapVoice: function(e) {
    const _this = this
    //播放音乐
    this.innerAudioCTX.src = _this.data.review.voice
    this.innerAudioCTX.play()

    console.log('tap')
  }

  // sendReviewBtnClick: function (e) {
  //   wx.navigateTo({
  //     url: '../review-list/review-list'
  //   })
  // }
})