import jwt from 'jsonwebtoken';

// NOTE: Ensure your JWT_SECRET is available in the environment variables (.env file)
const authMiddleware = (req, res, next) => {
    // Get token from the header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user info to the request object
        req.user = decoded.user; // Should contain { id, name }
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

export default authMiddleware;