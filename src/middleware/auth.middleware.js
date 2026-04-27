const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }


  if (authHeader) {
      next();
    } else {
    return res.status(403).json({ message: "Forbidden" });
  }

};

export default authMiddleware;