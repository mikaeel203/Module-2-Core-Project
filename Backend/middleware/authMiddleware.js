// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

// const authMiddleware = (req, res, next) => {
//     const token = req.header('Authorization')?.split(' ')[1]; // Extract token from "Bearer <token>"

//     if (!token) {
//         return res.status(401).json({ message: "Access denied. No token provided." });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // Store user data in request object
//         next();
//     } catch (err) {
//         return res.status(403).json({ message: "Invalid token." }); // Changed from 401 to 403 for better clarity
//     }
// };

// export default authMiddleware;
