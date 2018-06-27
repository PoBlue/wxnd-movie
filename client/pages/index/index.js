//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

const MOVIE_LIST_URL = "https://kt92y4yu.qcloud.la/weapp/movies"

Page({
  onLoad: function(options) {
    qcloud.request({
      url: MOVIE_LIST_URL,
      success: result => {
        console.log(result)
      },
      fail: result => {
        console.log(result)
      }
    })
  }
})
