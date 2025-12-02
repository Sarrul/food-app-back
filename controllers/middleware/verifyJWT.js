const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret";

const verifyJWT = (req, res, next) => {
  const authorization = req.headers["authorization"];
  console.log(authorization, "authorization");
  if (!authorization) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authorization.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Invalid or expired token." });

    console.log("decoded", decoded);

    req.user = decoded.user;
    next();
  });
};

module.exports = verifyJWT;
