const { notFound, internalServerError } = require("../middlewares/handleError")
const insert = require("./insertDB")
const user = require("./user.routes")
const BASE_ENDPOINT = '/api/v1/'
const initWebRoutes = (app) => {
  app.use(`${BASE_ENDPOINT}insert`, insert)
  app.use(`${BASE_ENDPOINT}user`, user)

  app.use(notFound)
  app.use(internalServerError)
}

module.exports = initWebRoutes