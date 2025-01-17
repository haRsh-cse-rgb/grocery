const jwt = require("jsonwebtoken");

const sendToken = async (userId) => {
  // return await jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
  return await jwt.sign({ userId: userId }, 'jskjxkjklm827y3y7jndj', {
    expiresIn: `5d`,
  });
};

const sendCookie = async (res, statusCode, token, user, message) => {
  const options = {
    expires: new Date(
      // Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.cookie("token", token, options);
  res.status(statusCode).json({
    success: true,
    message,
    user,
    token,
  });
};

module.exports = { sendToken, sendCookie };
