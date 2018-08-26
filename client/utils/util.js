const getLineNums = (blockHeight) => {
  const linesHeight = 1.5 * 16;
  return Math.floor(blockHeight / linesHeight);
}

const reviewKey = {
  movieId: "movieId",
  imageUrl: "imageUrl",
  name: "name",
  dataType: "dataType",
  text: "text",
  voice: "voice",
  userId: "userId"
}

const movieKey = {
  id: "id",
  title: "title",
  image: "image",
  description: "description",
  create_time: "create_time"
}

const getReviewOpt = (options) => {
  const review = {
    movieId: options[reviewKey.movieId],
    imageUrl: options[reviewKey.imageUrl],
    name: options[reviewKey.name],
    dataType: options[reviewKey.dataType],
    text: options[reviewKey.text],
    voice: options[reviewKey.voice],
    userId: options[reviewKey.userId]
  }
  return review
}

const getMovieOpt = (options) => {
  const movie = {
    id: options[movieKey.id],
    title: options[movieKey.title],
    image: options[movieKey.image],
    description: options[movieKey.description],
    create_time: options[movieKey.create_time]
  }
  return movie
}

const createMovieParam = (movie) => {
  let paramUrl = ''
  for (const [key, keyValue] of Object.entries(movieKey)) {
    paramUrl += keyValue + '=' + movie[keyValue] + '&&'
  }
  return paramUrl
}

const createReviewParam = (review) => {
  let paramUrl = ''
  for (const [key, keyValue] of Object.entries(reviewKey)) {
    paramUrl += keyValue + '=' + review[keyValue] + '&&'
  }
  return paramUrl
}

const getFileName = (url) => {
  var filename = url.substring(url.lastIndexOf('/')+1);
  return filename
}

module.exports = { getLineNums, getReviewOpt, getMovieOpt,
                   createMovieParam, createReviewParam, getFileName }
