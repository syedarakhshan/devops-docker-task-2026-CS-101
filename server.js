const http = require("http");

// ====== YAHAN APNI DETAILS LIKHEIN ======
const STUDENT_NAME = "Your Name";
const STUDENT_ID = "2026-CS-101";
const COURSE_NAME = "DevOps";
// ========================================

const PORT = 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DevOps Docker Task</title>
  <style>
    body { font-family: Arial, sans-serif; background: #0f172a; color: #e2e8f0;
           display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
    .card { background: #1e293b; padding: 40px 60px; border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0,0,0,.4); text-align: center; }
    h1 { color: #38bdf8; margin-top: 0; }
    p { font-size: 18px; margin: 10px 0; }
    .msg { margin-top: 25px; padding: 12px; background: #0ea5e9; color: #fff; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>DevOps Docker Task</h1>
    <p><b>Student Name:</b> ${STUDENT_NAME}</p>
    <p><b>Student ID:</b> ${STUDENT_ID}</p>
    <p><b>Course Name:</b> ${COURSE_NAME}</p>
    <div class="msg">This application is running inside a Docker container.</div>
  </div>
</body>
</html>`;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  })
  .listen(PORT, "0.0.0.0", () => console.log(`App running on port ${PORT}`));
