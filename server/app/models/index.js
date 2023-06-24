const mongoose = require('mongoose');
const rolesConfig = require('../config/roles.config');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');
db.category = require('./category.model');
db.sub_category = require('./sub-category.model');
db.refreshToken = require("./refreshToken.model");

db.Roles = rolesConfig.ROLES;

module.exports = db;