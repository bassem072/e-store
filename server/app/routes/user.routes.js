const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken, authJwt.checkRole(["user"])],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.checkRole(["moderator"])],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.checkRole(["admin"])],
    controller.adminBoard
  );
  app.get(
    "/api/test/super_admin",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin"])],
    controller.adminBoard
  );
};
