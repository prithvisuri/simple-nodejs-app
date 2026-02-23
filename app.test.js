const request = require('supertest');
const app = require('./index');

describe('API Endpoints', () => {
    test('GET /api/users should return a list of users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(Array.isArray(response.body.data)).toBe(true);
        expect(response.body.data.length).toBeGreaterThan(0);
    });

    test('GET /api/info should return server info', async () => {
        const response = await request(app).get('/api/info');
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.appName).toBe('Simple Node.js App');
    });

    test('GET /non-existent-route should return 404', async () => {
        const response = await request(app).get('/non-existent-route');
        expect(response.statusCode).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
