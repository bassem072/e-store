const { authJwt } = require("../middlewares");
const controller = require("../controllers/category.controller");
const existingParams = require("../middlewares/existingParams");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/category",
    [
      authJwt.verifyToken,
      existingParams(["name"]),
      authJwt.checkRole(["super_admin", "admin"]),
    ],
    controller.addCategory
  );

  app.put(
    "/api/category/:id",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.editCategory
  );

  app.delete(
    "/api/category/:id",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.deleteCategory
  );

  app.get(
    "/api/category",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.getAllCategories
  );

  app.get(
    "/api/category/:id",
    [
      authJwt.verifyToken,
      authJwt.checkRole(["super_admin", "admin"],),
    ],
    controller.getCategory
  );

  app.get(
    "/api/category/length",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.getLength
  );
};
