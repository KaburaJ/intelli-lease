function isAuthorized(allowedRoles) {
    return (req, res, next) => {
      if (allowedRoles.includes(req.userRole)) {
        next();
      } else {
        res.status(403).json({ message: 'Unauthorized' });
      }
    };
  }