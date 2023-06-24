const { authJwt } = require("../middlewares");
const controller = require("../controllers/moderator.controller");
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
    "/api/moderator",
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
      authJwt.checkRole(["super_admin", "admin"]),
    ],
    controller.addModerator
  );

  app.put(
    "/api/moderator/:id",
    [
      authJwt.verifyToken,
      authJwt.checkRole(["super_admin", "admin", "moderator"]),
      authJwt.checkUser("moderator"),
    ],
    controller.editModerator
  );

  app.put(
    "/api/moderator/:id/editRole",
    [
      authJwt.verifyToken,
      authJwt.checkRole(["super_admin", "admin"]),
      authJwt.checkPermission("moderator"),
    ],
    controller.changePermission
  );

  app.delete(
    "/api/moderator/:id",
    [
      authJwt.verifyToken,
      authJwt.checkRole(["super_admin", "admin"]),
      authJwt.checkPermission("moderator"),
    ],
    controller.deleteModerator
  );

  app.get(
    "/api/moderator",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.getAllModerators
  );

  app.get(
    "/api/moderator/:id",
    [
      authJwt.verifyToken,
      authJwt.checkRole(["super_admin", "admin"]),
      authJwt.checkPermission("moderator"),
    ],
    controller.getModerator
  );

  app.get(
    "/api/admin/length",
    [authJwt.verifyToken, authJwt.checkRole(["super_admin", "admin"])],
    controller.getLength
  );
};
