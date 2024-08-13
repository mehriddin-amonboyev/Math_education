export const roleMiddleware = (roles) => {
    return (req, res, next) => {
        if (req.session.user && roles.includes(req.session.user.role)) {
            return next();
        }
        res.status(403).send('Access denied');
    };
};