// pages/review-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reviewList: [{
      movieId: 1,
      imageUrl: "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg",
      name: "名字1",
      dataType: "文字",
      text: "一些文字,一些文字一些文字一些文字一些文字",
      voice: "http://"
    }, {
        movieId: 2,
        imageUrl: "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg",
        name: "名字2",
        dataType: "语音",
        text: "",
        voice: "15s"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})