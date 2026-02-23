const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --- Routes ---

// Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API: Get all users
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice Johnson', role: 'Developer', email: 'alice@example.com' },
        { id: 2, name: 'Bob Smith', role: 'Designer', email: 'bob@example.com' },
        { id: 3, name: 'Carol White', role: 'Manager', email: 'carol@example.com' },
    ];
    res.json({ success: true, data: users });
});

// API: Get server info
app.get('/api/info', (req, res) => {
    res.json({
        success: true,
        data: {
            appName: 'Simple Node.js App',
            version: '1.0.0',
            nodeVersion: process.version,
            uptime: `${Math.floor(process.uptime())}s`,
            timestamp: new Date().toISOString(),
        },
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`✅  Server running at http://localhost:${PORT}`);
        console.log(`📡  API endpoints:`);
        console.log(`     GET /api/users  → returns a list of users`);
        console.log(`     GET /api/info   → returns server information`);
    });
}

module.exports = app;
