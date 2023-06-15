const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res
      .status(401)
      .send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
};

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  console.log(token);
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return catchError(err, res);
    }
    req.userId = decoded.id;
    next();
  });
};

const isExist = (req, res, next) => {
  const current_id = req.params.id;
  User.findById(current_id)
    .then((user) => {
      if (user) {
        next();
      } else {
        res.status(403).send({ message: "Admin not found" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err });
      return;
    });
};

const checkRole = (roleList) => {
  return (req, res, next) => {
    User.findById(req.userId)
    .then((user) => {
        console.log(user);
        Role.find({
          _id: { $in: user.roles },
        })
          .then((roles) => {
            for (let i = 0; i < roles.length; i++) {
              console.log(roleList, roles[i].name);
              console.log(roleList.includes(roles[i].name));
              if (roleList.includes(roles[i].name)) {
                console.log(roles[i].name);
                next();
                return;
              }
            }
              res.status(403).send({ message: `Require ${roleList} Role!` });
              console.log("y");
              return;
          })
          .catch((err) => {
            console.log("x");
            res.status(500).send({ message: err });
            return;
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err });
        return;
      });
    /*Role.findOne({
      name: RoleName,
    })
      .then((role) => {
        if (!role) {
          return res.status(403).send({
            message: "You are not authorized to perform this action.",
          });
        }
        req.role = role;
        next();
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving role.",
        });
      });*/
  };
};

const checkUser = (roleName) => {
  return (req, res, next) => {
    const current_id = req.params.id;
    User.findById(req.userId)
      .then((user) => {
        Role.find({
          _id: { $in: user.roles },
        })
          .then((roles) => {
            for (let i = 0; i < roles.length; i++) {
              if (roles[i].name === roleName) {
                if (req.userId === current_id) {
                  next();
                } else {
                  res.status(403).json({
                    message: "You don't have permission to access this data.",
                  });
                }
                return;
              }
            }

            next();
          })
          .catch((err) => {
            res.status(500).send({ message: err });
            return;
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err });
        return;
      });
  };
};

const checkPermission = (roleName) => {
  return (req, res, next) => {
    const current_id = req.params.id;
    User.findById(current_id)
      .then((user) => {
        Role.find({
          _id: { $in: user.roles },
        })
          .then((roles) => {
            for (let i = 0; i < roles.length; i++) {
              if (roles[i].name === roleName) {
                next();
                return;
              }
            }
            res.status(403).send({ message: `Require ${roleList} Role!` });
            console.log("y");
            return;
          })
          .catch((err) => {
            res.status(500).send({ message: err });
            return;
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err });
        return;
      });
  };
};

const authJwt = {
  verifyToken,
  checkRole,
  checkUser,
  checkPermission,
  isExist,
};

module.exports = authJwt;
