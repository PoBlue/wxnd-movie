// pages/review-preview/review-preview.js
//index.js
var COS = require('../../lib/cos-wx-sdk-v5')
var config = require('./config')

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
      dataType: "语音",
      text: "一些文字,一些文字一些文字一些文字一些文字",
      voice: "15s"
    }
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
    console.log("play voice")
  }

  // sendReviewBtnClick: function (e) {
  //   wx.navigateTo({
  //     url: '../review-list/review-list'
  //   })
  // }
})