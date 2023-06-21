const request = require('supertest');
const app = require('../server');


let user_token
let user_id


/* User endpoints */
describe('User endpoints', () => {

    describe('POST /register', () => {
        it('Should create a new user', async () => {
            const user_data = {
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
                .post('/users/register')
                .send(user_data)

            expect(response.statusCode).toBe(200)
            expect(response.body.token).toBeDefined()
            expect(response.body._id).toBeDefined()

            user_token = response.body.token
            user_id = response.body._id
        })

    })

    describe('GET /:id', () => {

        it('Should return the user created before', async () => {

            const response = await request(app)
                .get(`/users/${user_id}`)
                .set('x-access-token', user_token)


            expect(response.statusCode).toBe(200)
            expect(response.body.data).toBeDefined()

        })

    })

    describe('UPDATE /update', () => {

        it('Should update an user', async () => {

            const user_data = {
                first_name: 'André',
                last_name: 'Lara',
            };

            const response = await request(app)
                .post(`/users/update/${user_id}`)
                .send(user_data)
                .set('x-access-token', user_token)


            expect(response.statusCode).toBe(200)
        })

    })


    describe('Delete /delete', () => {

        it('Should delete an user', async () => {

            const user_data = {
                first_name: 'André',
                last_name: 'Lara',
            };

            const response = await request(app)
                .delete(`/users/${user_id}`)
                .set('x-access-token', user_token)

            expect(response.statusCode).toBe(200)
        })

    })

})

/* Box endpoints */
/* Company endpoints */
/* Card endpoints */
/* Transaction endpoints */
