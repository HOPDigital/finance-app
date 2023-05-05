const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const UserModel = require('../model/UserModel').model;

describe('User controller', () => {

    describe('POST /register', () => {
        it('should create a new user', async () => {
            const userData = {
                email: 'test@example.com',
                password: 'password123',
                first_name: 'John',
                last_name: 'Doe',
                birth_date: '1990-01-01',
                city: 'New York',
                country: 'USA',
                phone: '1234567890',
                profile_picture: 'https://example.com/profile.jpg'
            };

            const response = await request(app)
                .post('/users/register')
                .send(userData);

            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchObject({
                email: 'test@example.com',
                first_name: 'John',
                last_name: 'Doe',
                birth_date: '1990-01-01',
                city: 'New York',
                country: 'USA',
                phone: '1234567890',
                profile_picture: 'https://example.com/profile.jpg'
            });
            expect(response.body.password).not.toBe(userData.password);
            expect(response.body.token).toBeDefined();
        });

        it('should return an error if required fields are missing', async () => {
            const userData = {
                email: 'test@example.com',
                password: 'password123'
            };

            const response = await request(app)
                .post('/users/register')
                .send(userData);

            expect(response.statusCode).toBe(400);
            expect(response.text).toBe('Missing required fields');
        });

        it('should return an error if the user already exists', async () => {
            const userData = {
                email: 'test@example.com',
                password: 'password123',
                first_name: 'John',
                last_name: 'Doe',
                birth_date: '1990-01-01',
                city: 'New York',
                country: 'USA'
            };

            await UserModel.create(userData);

            const response = await request(app)
                .post('/users/register')
                .send(userData);

            expect(response.statusCode).toBe(409);
            expect(response.text).toBe('User already exists');
        });

        it('should return an error if there is a server error', async () => {
            jest.spyOn(UserModel, 'create').mockImplementation(() => { throw new Error('Server error') });

            const userData = {
                email: 'test@example.com',
                password: 'password123',
                first_name: 'John',
                last_name: 'Doe',
                birth_date: '1990-01-01',
                city: 'New York',
                country: 'USA'
            };

            const response = await request(app)
                .post('/users/register')
                .send(userData);

            expect(response.statusCode).toBe(500);
            expect(response.text).toBe('Error registering user');
        });
    });
});
