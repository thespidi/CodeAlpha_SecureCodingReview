require("dotenv").config();



const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Vulnerability 1: SQL Injection
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err.message);
        }

        if (results.length > 0) {
            res.send("Login successful");
        } else {
            res.send("Invalid username or password");
        }
    });
});

app.listen(3000, () => {
    console.log("Vulnerable application running on port 3000");
});
