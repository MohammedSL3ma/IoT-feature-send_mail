# IoT-feature-send_mail:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IoT-Enabled Door Monitoring System 🚪</title>
</head>
<body>

<h1>IoT-Enabled Door Monitoring System 🚪</h1>

<h2>Overview</h2>
<p>This project is an <strong>IoT-enabled door monitoring system</strong> using an ESP32 microcontroller, an infrared sensor, and WiFi connectivity. The system detects door status changes and sends email notifications to specified recipients when the door is opened or closed.</p>

<h2>Key Features</h2>
<ul>
    <li><strong>WiFi Connectivity</strong>: ESP32 connects to a WiFi network to communicate with the backend server.</li>
    <li><strong>Infrared Sensor</strong>: Detects whether the door is open or closed.</li>
    <li><strong>HTTP Requests</strong>: ESP32 sends GET requests to the server when the door status changes.</li>
    <li><strong>Email Notifications</strong>: Server sends email alerts to specified recipients for door status updates.</li>
</ul>

<h2>Benefits</h2>
<ul>
    <li><strong>Real-time monitoring</strong> of door status.</li>
    <li><strong>Immediate email notifications</strong> for security purposes.</li>
    <li><strong>Seamless integration</strong> of hardware and software.</li>
</ul>

<h2>How to Use</h2>
<ol>
    <li><strong>Setup ESP32</strong>:
        <ul>
            <li>Upload the ESP32 code to your ESP32 board.</li>
            <li>Ensure the infrared sensor is connected to the specified pin.</li>
        </ul>
    </li>
    <li><strong>Setup Server</strong>:
        <ul>
            <li>Install dependencies: <code>npm install express nodemailer dotenv</code></li>
            <li>Configure your environment variables for email credentials.</li>
            <li>Run the server: <code>node server.js</code></li>
        </ul>
    </li>
    <li><strong>Monitor Door Status</strong>:
        <ul>
            <li>The ESP32 will detect door status changes and notify the server.</li>
            <li>The server will send email alerts when the door is opened or closed.</li>
        </ul>
    </li>
</ol>

<h2>Contributing</h2>
<p>Contributions are welcome! Please fork the repository, create a new branch, make your changes, and open a pull request.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

<p>Feel free to reach out if you have any questions or need further assistance!</p>

</body>
</html>
