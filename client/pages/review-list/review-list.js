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
  backHomeClick: function(e) {
    wx.navigateBack({
      delta: 50
    })
  },
  listClick: function(e) {
    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../review-detail/review-detail'
    })
  }
})