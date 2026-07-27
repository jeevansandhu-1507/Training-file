// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {

//     const header = req.headers.authorization;

//     console.log("Authorization Header:", header);

//     if (!header) {
//         return res.status(401).json({
//             message: "No Token"
//         });
//     }

//     const token = header.split(" ")[1];

//     console.log("Received Token:", token);

//     console.log("JWT_SECRET:", process.env.JWT_SECRET);

//     try {

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         console.log("Decoded Token:", decoded);

//         req.user = decoded;

//         next();

//     } catch (err) {

//         console.log("JWT Error:", err.message);

//         return res.status(401).json({
//             message: "Invalid Token"
//         });

//     }

// };

// module.exports = auth;