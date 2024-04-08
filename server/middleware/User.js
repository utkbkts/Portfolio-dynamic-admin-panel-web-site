const auth = require("express-oauth2-jwt-bearer").auth;
const jwt = require("jsonwebtoken");
const MyUserAuth0 = require("../models/MyUserAuth0");
const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

const JwtParse = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Bearer")) {
      return res.sendStatus(401);
    }
    const token = authorization.split(" ")[1];

    const decoded = jwt.decode(token);
    const auth0Id = decoded.sub;

    const user = await MyUserAuth0.findOne({ auth0Id });
    if (!user) {
      return res.sendStatus(401);
    }
    req.auth0Id = auth0Id;
    req.userId = user._id.toString();
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

module.exports = { jwtCheck, JwtParse };
