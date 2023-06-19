const { authJwt } = require("../middlewares");
const controller = require("../controllers/admin.controller");
const existingParams = require("../middlewares/existingParams");
const { verifySignUp } = require("../middlewares");

module.exports = function (app) {
    app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    app.post(
      "/api/admin",
      [
        authJwt.verifyToken,
        existingParams([
          "first_name",
          "last_name",
          "email",
          "password",
          "gender",
          "birthday",
        ]),
        verifySignUp.checkDuplicateEmail,
        authJwt.checkRole(["super_admin"]),
      ],
      controller.addAdmin
    );

    app.put(
      "/api/admin/:id",
      [
        authJwt.verifyToken,
        authJwt.checkRole(["super_admin", "admin"]),
        authJwt.checkUser("admin"),
      ],
      controller.editAdmin
    );

    app.put(
      "/api/admin/:id/editRole",
      [
        authJwt.verifyToken,
        authJwt.checkRole(["super_admin"]),
        authJwt.checkPermission("admin"),
      ],
      controller.changePermission
    );

    app.delete(
      "/api/admin/:id",
      [
        authJwt.verifyToken,
        authJwt.checkRole(["super_admin"]),
        authJwt.checkPermission("admin"),
      ],
      controller.deleteAdmin
    );

    app.get(
      "/api/admin",
      [authJwt.verifyToken, authJwt.checkRole(["super_admin"])],
      controller.getAllAdmins
    );

    app.get(
      "/api/admin/:id",
      [
        authJwt.verifyToken,
        authJwt.checkRole(["super_admin"]),
        authJwt.checkPermission("admin"),
      ],
      controller.getAdmin
    );

    app.get(
      "/api/admin/length",
      [authJwt.verifyToken, authJwt.checkRole(["super_admin"])],
      controller.getLength
    );
};