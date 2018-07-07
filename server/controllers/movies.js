const DB = require('../utils/db.js')

//执行数据库操作，并返回数据
module.exports = {
  list: async ctx => {
    ctx.state.data = await DB.query("SELECT * FROM movies;")
  }
}