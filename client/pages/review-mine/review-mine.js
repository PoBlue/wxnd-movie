// pages/review-mine/review-mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listname: "收藏的影评",
    favourList: [
      {
        movie: {
          "id": 1,
          "title": "复仇者联盟3：无限战争",
          "image": "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg",
          "category": "动作 / 科幻 / 奇幻 / 冒险",
          "description": "《复仇者联盟3：无限战争》是漫威电影宇宙10周年的历史性集结，将为影迷们带来史诗版的终极对决。面对灭霸突然发起的闪电袭击，复仇者联盟及其所有超级英雄盟友必须全力以赴，才能阻止他对全宇宙造成毁灭性的打击。",
          "create_time": "2018-06-27T07:05:21.000Z"
        },
        review: {
          movieId: 1,
          imageUrl: "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg",
          name: "名字1",
          dataType: "文字",
          text: "一些文字,一些文字一些文字一些文字一些文字一些文字一些文字一些文字一些文字",
          voice: "http://"
        }
      },
      {
        movie: {
          "id": 2,
          "title": "至暗时刻 Darkest Hour",
          "image": "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2504277551.jpg",
          "category": "剧情 / 传记 / 历史",
          "description": "影片讲述英国首相丘吉尔在作为首相期间面临的最重要的审判：是向纳粹妥协做俘虏，还是团结人民群起反抗？丘吉尔将集结整个国家为自由奋战，试图改变世界历史进程，度过黎明前的黑暗。",
          "create_time": "2018-06-27T07:05:21.000Z"
        },
        review: {
          movieId: 2,
          imageUrl: "https://poster-1257004793.cos.ap-guangzhou.myqcloud.com/p2517753454.jpg",
          name: "名字2",
          dataType: "语音",
          text: "",
          voice: "15s"
        }
      }
    ]
  },

  backHomeClick: function(e) {
    wx.navigateBack({
      delta: 5
    })
  }

})