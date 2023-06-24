const { authJwt } = require("../middlewares");
const controller = require("../controllers/sub-category.controller");
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
    "/api/subcategory",
    [
      authJwt.verifyToken,
      existingParams(["name", "category"]),
      authJwt.checkRole(["super_admin", "admin"]),
    ],
    controller.addSubCategory
  );

  app.put(
    "/api/subcategory/:id",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.editSubCategory
  );

  app.delete(
    "/api/subcategory/:id",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.deleteSubCategory
  );

  app.get(
    "/api/subcategory",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.getAllSubCategories
  );

  app.get(
    "/api/subcategory/:id",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.getSubCategory
  );

  app.get(
    "/api/subcategory/length",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.getLength
  );
};
