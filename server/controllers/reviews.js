//获取数据库
const DB = require('../utils/db.js')

//执行数据库操作，并返回数据
module.exports = {
  list: async ctx => {
    //返回数据
    
    const movie_id = ctx.request.query['movie_id']
    if (!movie_id) {
      ctx.state.data = {error: '请提供参数 movie_id'}
      return 
    }
    ctx.state.data = await DB.query(`SELECT * FROM reviews WHERE movieId = ${movie_id};`)
  },

  all: async ctx => {
    ctx.state.data = await DB.query(`SELECT * FROM reviews;`)
  },

  add: async ctx => {
    const body = ctx.request.body
    let image_url = body.imageUrl
    let name = body.name
    let data_type = body.dataType
    let text = body.text
    let voice_url = body.voice
    let movie_id = body.movieId
    // let user_id = body.userId
    let user_id = ctx.state.$wxInfo.userinfo.openId

    ctx.state.data = await DB.query(`INSERT INTO reviews(imageUrl, name, dataType, text, voiceUrl, movieId, user_id) VALUES (?,?,?,?,?,?,?)`,
                        [image_url, name, data_type, text, voice_url, movie_id, user_id])
  }
}