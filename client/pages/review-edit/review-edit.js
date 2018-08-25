// pages/review-edit/review-edit.js
const qcloud = require('../../vendor/wafer2-client-sdk/index')
const config = require('../../config.js')
const utils = require('../../utils/util.js')

//录音设置
const recorderManager = wx.getRecorderManager()
const recordeOptions = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'mp3',
  frameSize: 50
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEditText: false,
    isFinished: false,
    recording: false,
    userInfo: null,
    tempFilePath: '',
    inputText: '',
    movie: {
      "id": 1,
      "title": "复仇者联盟3：无限战争",
      "image": "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg", "category": "动作 / 科幻 / 奇幻 / 冒险", "description": "《复仇者联盟3：无限战争》是漫威电影宇宙10周年的历史性集结，将为影迷们带来史诗版的终极对决。面对灭霸突然发起的闪电袭击，复仇者联盟及其所有超级英雄盟友必须全力以赴，才能阻止他对全宇宙造成毁灭性的打击。",
      "create_time": "2018-06-27T07:05:21.000Z"
    }
  },

  onLoad: function (options) {
    this.setData({
      isEditText: options.editType=='文字'
    })

    //检查之前是否授权登陆过
    getApp().checkSession({
      success: ({ userInfo }) => {
        console.log(userInfo)
        this.setData({
          userInfo: userInfo
        })
      },
      error: () => { }
    })

    recorderManager.onStart(() => {
      console.log('recorder start')
      this.setData({
        recording: true
      })
    })

    recorderManager.onStop((res) => {
      console.log('recorder finished')
      const { tempFilePath } = res
      this.setData({
        isFinished: true,
        recording: false,
        tempFilePath
      })
    })
  },


  onTapRecord: function (e) {
    recorderManager.start(recordeOptions)
  },

  onTapStop: function(e) {
    recorderManager.stop()
  },

  onTapLogin: function (e) {
    qcloud.setLoginUrl(config.service.loginUrl)

    getApp().doQcloudLogin({
      success: ({ userInfo }) => {
        this.setData({
          userInfo
        })
      }
    })
  },

  createReviewData: function() {
    const _this = this
    const review = {
      movieId: _this.data.movie.id,
      imageUrl: _this.data.userInfo.avatarUrl,
      name: _this.data.userInfo.nickName,
      dataType: _this.data.isEditText? '文字' : '语音',
      text: _this.data.inputText,
      voice: _this.data.tempFilePath,
      userId: _this.data.userInfo.openId
    }
    return review
  },

  finBtnClick: function (e) {
    const _this = this
    let pageUrl = '../review-preview/review-preview?'
    pageUrl += utils.createReviewParam(_this.createReviewData())
    pageUrl += utils.createMovieParam(_this.data.movie)
    console.log(pageUrl)

    wx.navigateTo({
      url: pageUrl
    })
  }
})