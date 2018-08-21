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
    ctx.state.data = await DB.query(`SELECT * FROM reviews WHERE movie_id = ${movie_id};`)
  }
}