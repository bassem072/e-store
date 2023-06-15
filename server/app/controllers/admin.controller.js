const db = require("../models");
const { user: User, role: Role } = db;
var bcrypt = require("bcrypt");

exports.addAdmin = (req, res) => {
  console.log("ok");
  const { first_name, last_name, email, password, gender, birthday } = req.body;
  Role.findOne({
    name: "admin",
  })
    .then(async (role) => {
      const user = new User({
        first_name,
        last_name,
        email,
        password: bcrypt.hashSync(password, 8),
        gender,
        birthday,
        roles: [role._id],
      });
      console.log(user);
      await user.save();
      return res.status(200).json({ message: user });
    })
    .catch((err) => {
      return res.status(500).send({ error: err });
    });
};

exports.editAdmin = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const data = {};
  if (updateData.first_name) {
    data.first_name = updateData.first_name;
  }

  if (updateData.last_name) {
    data.last_name = updateData.last_name;
  }

  if (updateData.gender) {
    data.gender = updateData.gender;
  }

  if (updateData.birthday) {
    date.birthday = updateData.birthday;
  }

  if (Object.keys(data).length > 0) {
    User.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      function (err, doc) {
        if (err) return res.send({ message: err });
        return res.send({ message: doc });
      }
    );
  } else {
    return res.send({ message: "You did not update any Data." });
  }
};

exports.changePermission = (req, res) => {
  const current_id = req.params.id;
  const newRole = req.body.role;
  Role.findOne({
    name: newRole,
  })
    .then((role) => {
      User.findByIdAndUpdate(current_id, {
        $set: { roles: [role._id] },
      })
        .then((user) => {
          res.send({ message: user });
        })
        .catch((err) => {
          res.status(500).send({ message: err });
          return;
        });
    })
    .catch((err) => {
      return res.status(500).send({ error: err });
    });
};

exports.deleteAdmin = (req, res) => {
  const current_id = req.params.id;
  User.findByIdAndDelete(current_id)
    .then((user) => {
      return res.status(200).send({ message: user });
    })
    .catch((err) => {
      return res.status(500).send({ message: "Admin not updated" });
    });
};

exports.getAllAdmins = async (req, res) => {
  const sort = req.query.sort ?? "first_name";
  const inc = req.query.inc ?? true;
  const searchString = req.query.search ?? "";
  const page = req.query.page ?? 1;
  const limit = req.query.limit ?? 10;
  const sorting = {};
  sorting[sort] = inc ? "asc" : "desc";

  const roleId = await Role.findOne({name: 'admin'});

  User.find({
    roles: {
      $in: [roleId],
    },
    $or: [
      {
        first_name: {
          $regex: ".*" + searchString + ".*",
        },
      },
      {
        last_name: {
          $regex: ".*" + searchString + ".*",
        },
      },
      {
        email: {
          $regex: ".*" + searchString + ".*",
        },
      },
      {
        first_name: {
          $regex: ".*" + searchString + ".*",
        },
      },
    ],
  })
    .populate("roles", "-__v")
    .skip((page - 1) * limit)
    .limit(limit)
    .sort(sorting)
    .then((user) => {
      return res.status(200).send({ message: user });
    })
    .catch((err) => {
      return res.status(503).send({ message: "Admin Not Found" });
    });
};

exports.getAdmin = (req, res) => {
  const current_id = req.params.id;
  User.findById(current_id)
    .populate("roles", "-__v")
    .then((user) => {
      return res.status(200).send({ message: user });
    })
    .catch((err) => {
      return res.status(503).send({ message: "Admin Not Found" });
    });
};

exports.getLength = (req, res) => {
  console.log("hi");
  Role.findOne({
    name: "admin",
  })
    .then((role) => {
      User.countDocuments({
        roles: {
          $in: [role._id],
        },
      })
        .then((count) => {
          return res.status(200).send({ length: count });
        })
        .catch((err) => {
          return res.status(500).send({ error: err });
        });
    })
    .catch((err) => {
      return res.status(500).send({ error: err });
    });
};
