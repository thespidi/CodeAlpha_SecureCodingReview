require("dotenv").config();


const express = require("express");
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.json({ limit: "10kb" }));

// Database connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

// Login rate limiter
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: "Too many login attempts. Try again later."
});

// Secure login route
app.post("/login", loginLimiter, async (req, res) => {
    try {
        const { username, password } = req.body;

        // Input validation
        if (
            typeof username !== "string" ||
            typeof password !== "string" ||
            username.length < 3 ||
            username.length > 50 ||
            password.length < 8 ||
            password.length > 128
        ) {
            return res.status(400).json({
                message: "Invalid username or password format"
            });
        }

        // Parameterized query prevents SQL injection
        const [users] = await db.execute(
            "SELECT id, username, password_hash FROM users WHERE username = ?",
            [username]
        );

        if (users.length === 0) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        // Verify hashed password
        const isMatch = await bcrypt.compare(
            password,
            users[0].password_hash
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        res.json({ message: "Login successful" });

    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
});

app.listen(3001, () => {
    console.log("Secure application running on port 3001");
});
