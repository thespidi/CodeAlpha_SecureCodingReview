Task 3 of Secure Coding Review – CodeAlpha

1. Overview of Project

Name of Project: Secure Coding Review
Language Used: JavaScript
Technology Used: Node.js and Express.js
Data Storage Technology Used: MySQL
Testing Tool Used: Postman
Development Tool Used: Visual Studio Code

Aim of Project

The aim of the project is to reveal vulnerabilities in a login application, explain the way how they may be abused, and recommend the ways how to secure this application.

2. Applications that have been audited

Two versions of the login application were developed:

Not Secure Application: It uses insecure coding techniques.

Secure Application: It employs different techniques to protect itself from attacks. 

3. The vulnerabilities that were found 

3.1 SQL Injection. 

Description: 

In the not secure application, user input is directly used in SQL queries. The hacker can modify the query and pass the authentication.
Vulnerable Code:

const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

Impact:
The attacker can circumvent login authentication to use secured features.

Remediation:
Utilize parameterized queries instead of inserting user-supplied information in the SQL queries directly.

3.2 Storing Passwords in Plain Text

Description:
Storing passwords in plain text means that if there is a database breach, it becomes easy for malicious users to get hold of credentials.

Impact:
An attacker with access to the database can read the stored passwords.

Remediation:
Use bcrypt to encrypt passwords prior to storing them in the database and try to validate them using bcrypt comparison.

3.3 Input Validation Missing

Description:
The application does not validate usernames and passwords.

Impact:
The input may be unexpected or harmful leading to application errors or security breaches.

Remediation:
Validate the input types and enforce limits on the length of the username and password.

3.4 Login Rate Limiting Missing

Description:
The vulnerable application does not restrict login attempts.

Impact:
It allows the attackers to conduct repeated guessing attempts of the password.

Remediation:
Apply Express rate limiting for login attempts.

4. Improvements in Security

The secure application implements:

The use of parameterized SQL queries to avert SQL injection attacks.

Bcrypt is used for password hashing and verification.

Input validation is performed for the username and password.

Login attempts are restricted through Express Rate Limit.

Standardized error messages are used in order not to disclose database information.

Application's MySQL user has limited rights on the database.


5. Security Testing and Results

The following tests were performed using Postman.

Test

Expected Result

Actual Result

Correct login

Login successful

Passed

Incorrect password

401 Unauthorized

Passed

SQL injection on secure app

401 Unauthorized

Passed

Input validation

400 Bad Request

Passed

Repeated login attempts

429 Too Many Requests

Passed

SQL injection on vulnerable app

Authentication bypass demonstrated

Passed

6. Vulnerable versus Secure Application

The same SQL injection payload was attempted on both applications.

Vulnerable Application:

Port: 3000

Output: Login successful

Demonstrated that SQL injection could circumvent authentication.

Secure Application:

Port: 3001

Output: 401 Unauthorized

Parameterized queries prevented the injection from bypassing authentication.

7. Tools and Technology Used

JavaScript

Node.js

Express.js

MySQL

MySQL Workbench

Postman

Visual Studio Code

Bcrypt

Express Rate Limit
8. Conclusion


This security review shows how vulnerable coding methods can expose login applications to risks of attacks.


The vulnerable application enabled SQL injection to bypass authentication. The implementation of parameterized queries, bcrypt password checking, input validation, and rate limiting proved to be successful for attacks against the secure application.


The project helped me learn more about secure coding, identification of vulnerabilities, security testing, and application safeguards.


9. Evidence


Screenshots of the below tests are available in the screenshots folder:


SQL_Injection_Vulnerable.png


SQL_Injection_Secure.png


In addition, the screenshots of successful login, incorrect password, input validation, and rate limiting tests can also be added.

10. Security Limitations

This is a local educational demonstration, not acceptable as a production-grade authentication platform. Future improvement would be on environmental variables for credentials, HTTPS, secure session or token management, secure HTTP headers, and additional monitoring.
