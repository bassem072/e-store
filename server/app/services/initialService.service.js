const db = require("../models");
const User = db.user;
const Role = db.role;
var bcrypt = require("bcrypt");

async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      await createRole("super_admin");
      await createRole("admin");
      await createRole("moderator");
      await createRole("owner");
      await createRole("worker");
      await createRole("user"); 

      Role.findOne({
        name: "super_admin",
      }).then((role) => {
        const user = new User({
          first_name: "Bassem",
          last_name: "Elsayed",
          email: "bassemelsayd072@gmail.com",
          password: bcrypt.hashSync("bassem2751959@", 8),
          gender: "male",
          birthday: new Date("1997-05-22"),
          roles: [role._id],
        });
        user.save().then((user) => console.log("User Added: ", user)).catch((error) => console.log("User Error: ", error));
      }).catch((error) => console.log("Role Error: ", error));
    }
  } catch (error) {
    console.log("error:", error);
  }
}

async function createRole(roleName) {
  try {
    const role = await Role({ name: roleName }).save();
    console.log(`Role ${role.name} created.`);
  } catch (error) {
    console.log("error:", error);
  }
}

module.exports = initial;
