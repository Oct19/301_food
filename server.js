const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('To access from iPhone:');
    console.log('1. Make sure your iPhone is on the same WiFi network as this computer');
    console.log('2. Find your computer\'s IP address (ipconfig on Windows)');
    console.log('3. On your iPhone, open Safari and enter: http://[YOUR_COMPUTER_IP]:3000');
}); 