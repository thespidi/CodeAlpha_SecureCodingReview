# CodeAlpha – Secure Coding Review

## Project Overview

This project was developed as part of the CodeAlpha Cyber Security Internship (Task 3).

The purpose of this project is to identify common security vulnerabilities in a login application and demonstrate how to fix them using secure coding practices.

## Technologies Used

- JavaScript
- Node.js
- Express.js
- MySQL
- MySQL Workbench
- Postman
- Visual Studio Code
- Bcrypt
- Express Rate Limit

## Project Structure

```text
CodeAlpha_SecureCodingReview/
│
├── vulnerable_app/
│   ├── server.js
│   └── package.json
│
├── secure_app/
│   ├── server.js
│   └── package.json
│
├── reports/
│   └── Security_Audit_Report.md
│
├── screenshots/
│   ├── SQL_Injection_Vulnerable.png
│   └── SQL_Injection_Secure.png
│
└── README.md
```

## Vulnerabilities Reviewed

1. SQL Injection
2. Plain-text Password Storage
3. Missing Input Validation
4. Missing Login Rate Limiting

## Security Improvements

- Parameterized SQL queries
- Bcrypt password hashing and verification
- Input validation
- Login rate limiting
- Generic error messages
- Restricted database permissions

## Testing

The applications were tested using Postman.

| Test | Result |
|---|---|
| Valid login | Passed |
| Invalid password | Passed |
| SQL injection against secure app | Blocked |
| SQL injection against vulnerable app | Demonstrated |
| Input validation | Passed |
| Login rate limiting | Passed |

## How to Run

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Install dependencies

For the vulnerable application:

```bash
cd vulnerable_app
npm install
npm start
```

For the secure application, open another terminal:

```bash
cd secure_app
npm install
npm start
```

### 3. Application URLs

- Vulnerable application: `http://localhost:3000`
- Secure application: `http://localhost:3001`

**Note:** Configure your own MySQL database credentials and create the required `security_review` database and `users` table before running either application.

## Security Audit Report

Detailed findings, testing results, and remediation steps are available in:

`reports/Security_Audit_Report.md`

## Disclaimer

This project is created for educational purposes as part of a cybersecurity internship. The vulnerable application is intentionally insecure and should only be run in a controlled local testing environment.