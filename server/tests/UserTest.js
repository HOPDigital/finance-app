const request = require('supertest');
const app = require('../server');


describe('User endpoints', () => {
    describe('POST /register', () => {
        it('Should create a new user', async () => {
            const userData = {
                email: 'test@example.com',
                password: 'password123',
                first_name: 'John',
                last_name: 'Doe',
                birth_date: '1990-01-01',
                city: 'New York',
                country: 'USA',
                phone: 1234567890,
                profile_picture: 'https://example.com/profile.jpg'
            };

            const response = await request(app)
                .post('users/register')
                .send(userData)

            expect(response.statusCode).toBe(200)
            expect(response.body.token).toBeDefined()
        })

    })
})

