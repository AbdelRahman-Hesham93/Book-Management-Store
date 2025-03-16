const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const fullToken = req.headers.authorization;
    const token = fullToken?.split(" ")[1];
    console.log(token);
    if (!token) {
      res.status(401).send("error denied");}
else{
      const decodedToken = jwt.verify(token, "secretKey");
      console.log(decodedToken);
      req.user = decodedToken;
      next();
    }
  } catch (err) {
    res.status(400).send("invalid access");
  }
};
