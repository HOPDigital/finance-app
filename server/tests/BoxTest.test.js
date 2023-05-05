const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

const user_id = new mongoose.Types.ObjectId(); // Generate a fake user ID
const box_id = new mongoose.Types.ObjectId(); // Generate a fake box ID

describe.skip('BoxController', () => {
    describe('GET /boxes/:id', () => {
        it('should return a user\'s boxes', async () => {
            const response = await request(app).get(`/boxes/${user_id}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ _id: box_id })]));
        });
    });

    describe('POST /boxes/create', () => {
        it('should create a new box in a user\'s account', async () => {
            const fields = {
                name: 'Test Box',
                description: 'A box for testing purposes',
                target: 100,
                currency: 'USD'
            };

            const response = await request(app)
                .post('/boxes/create')
                .send({ id: user_id, ...fields });

            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchObject(fields);
        });
    });

    describe('PATCH /boxes/update', () => {
        it('should update an existing box in a user\'s account', async () => {
            const fields = {
                name: 'Updated Test Box',
                target: 200
            };

            const response = await request(app)
                .patch('/boxes/update')
                .send({ id: user_id, box_id: box_id, ...fields });

            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchObject(fields);
        });
    });

    describe('DELETE /boxes/delete', () => {
        it('should remove an existing box from a user\'s account', async () => {
            const response = await request(app)
                .delete('/boxes/delete')
                .send({ user_id: user_id, box_id: box_id });

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(expect.objectContaining({ _id: box_id }));
        });
    });
});
