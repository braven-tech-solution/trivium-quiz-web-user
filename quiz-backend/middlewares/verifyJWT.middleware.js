const jwt = require("jsonwebtoken");
const { promisify } = require("util");
// const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const ACCESS_TOKEN = `15917f03c85d0a59aec931265fccfcbf879a23b5b58a6b91cd565fe65eac6286f5d0f4ca593f8079f846dfb1d4c19349e2c71099aaf6cc1280cab347e2c7ebf1`;

exports.verifyJWT = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(403).send({
        status: "failed",
        message: "You are not loggedIn",
      });
    }

    const decoded = await promisify(jwt.verify)(token, ACCESS_TOKEN);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: "UnAuthorized User",
    });
  }
};
