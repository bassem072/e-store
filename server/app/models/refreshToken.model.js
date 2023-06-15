const mongoose = require("mongoose");
const config = require("../config/auth.config");
const { v4: uuidv4 } = require("uuid");

const RefreshTokenSchema = new mongoose.Schema({
  token: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expiryDate: Date,
});

RefreshTokenSchema.statics.createToken = async function createToken(
  user,
) {
  try {
    const expiredAt = new Date();
    expiredAt.setSeconds(
      expiredAt.getSeconds() +
        (user.remember
          ? config.jwtRefreshExpirationLong
          : config.jwtRefreshExpiration)
    );
    const _token = uuidv4();
    const _object = new this({
      token: _token,
      user: user._id,
      expiryDate: expiredAt.getTime(),
    });

    console.log(_object);

    const refreshToken = await _object.save();

    return refreshToken.token;
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: err,
    });
  }
};

RefreshTokenSchema.statics.verifyExpiration = async function verifyExpiration(
  token
) {
  const currentDate = new Date();
  return token.expiryDate.getTime() < currentDate.getTime();
};

const refreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

module.exports = refreshToken;
