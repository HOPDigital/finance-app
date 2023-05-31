const swaggerJsdoc = require("swagger-jsdoc")
import * as swaggerJsDoc from 'swagger-jsdoc'

interface IResponse {
    success: boolean | string,
    status: number | string,
    message: string
}

const default_response: IResponse = {
    success: 'boolean',
    status: 'number',
    message: 'string'
}

const options: swaggerJsDoc.Options = {
    definition: {
        swagger: "2.0",
        info: {
            title: "Documentation for Finapp API",
            version: "0.1.0",
            description:
                "Follow our project at: https://github.com/HOPDigital/finance-app",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Hop Digital",
                url: "https://hopdigital.dev",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:9000",
            },
        ],
        paths: {

            /* User Related Endpoints */
            '/user/login': {
                post: {
                    tags: ['Users'],
                    summary: "Authenticate user",
                    consumes: ['application/json'],
                    description: "Authenticate user and returns user token if correct",
                    produces: ["application/json"],
                    parameters: [
                        {
                            name: "email",
                            in: "body",
                            required: true,
                            schema: { "type": "string" },
                            description: 'E-mail used to create the user'
                        },

                        {
                            name: 'password',
                            in: 'body',
                            required: true,
                            schema: { 'type': 'string' },
                            description: 'Password created by that user'
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Token created",
                            schema: {
                                "type": "object",
                                'properties': {
                                    ...default_response,
                                    'token': 'string'
                                }
                            }
                        },
                        "400": {
                            description: "Missing fields",
                            schema: {
                                'type': 'object',
                                'properties': default_response
                            }
                        },
                        '409': {
                            description: 'No user found',
                            schema: {
                                'type': 'object',
                                'properties': default_response
                            }
                        },
                        '500': {
                            description: 'Server internal error',
                            schema: {
                                'type': 'object',
                                'properties': default_response
                            }
                        }
                    }
                }
            },

            '/users/register': {
                post: {
                    tags: ['Users'],
                    consumes: ['application/json'],
                    summary: 'Register',
                    description: 'Register new user',
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'email',
                            in: 'body',
                            required: true,
                            schema: { type: 'string' },
                            description: 'E-mail of the user',
                        },
                        {
                            name: 'password',
                            in: 'body',
                            required: true,
                            schema: { type: 'string' },
                            description: 'Password of the user',
                        },
                        {
                            name: 'first_name',
                            in: 'body',
                            required: true,
                            schema: { type: 'string' },
                            description: 'First name of the user',
                        },
                        {
                            name: 'last_name',
                            in: 'body',
                            required: true,
                            schema: { type: 'string' },
                            description: 'Last name of the user',
                        },
                        {
                            name: 'birth_date',
                            in: 'body',
                            required: true,
                            schema: { type: 'string' },
                            description: 'Birth date of the user, in format: yyyy-mm-dd',
                        },
                        {
                            name: 'city',
                            in: 'body',
                            required: false,
                            schema: { type: 'string' },
                            description: 'City of the user',
                        },
                        {
                            name: 'country',
                            in: 'body',
                            required: true,
                            schema: { type: 'string' },
                            description: 'Country of the user, to calculate currencies',
                        },
                        {
                            name: 'phone',
                            in: 'body',
                            required: false,
                            schema: { type: 'number' },
                            description: 'Phone number of the user',
                        },
                        {
                            name: 'profile_picture',
                            in: 'body',
                            required: false,
                            schema: { type: 'string' },
                            description: 'URI of the profile picture of the user',
                        },
                    ],
                    responses: {
                        400: {
                            description: 'Missing required fields, some of the required fields is not present',
                            schema: default_response
                        },
                        409: {
                            description: 'User already exists',
                            schema: default_response
                        },
                        200: {
                            description: 'User created successfuly',
                            schema: { ...default_response, user: 'object' }
                        }
                    }
                }
            },

            '/users/{id}': {
                get: {
                    tags: ['Users'],
                    summary: 'Get user by ID',
                    consumes: ['application/json'],
                    description: 'Get user data by user ID',
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: { type: 'string' },
                            description: 'ID of the user'
                        }
                    ],
                    responses: {
                        404: {
                            description: 'No user found',
                            schema: default_response
                        },
                        200: {
                            description: 'User found with success',
                            schema: { ...default_response, data: 'object' }
                        }
                    }
                },

                patch: {
                    tags: ['Users'],
                    summary: 'Update user',
                    descrpiton: 'Update user only with the fields given',
                    produces: ['application/json'],
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: true,
                            schema: { type: 'string' },
                            description: 'ID of the user to be updated'
                        },
                        {
                            name: 'fields',
                            in: 'body',
                            required: true,
                            schema: {
                                type: 'object',
                                properties: {
                                    'first_name': { type: 'string' },
                                    'last_name': { type: 'string' },
                                    'password': { type: 'string' },
                                    'email': { type: 'string' },
                                    'phone': { type: 'number' },
                                    'birth_date': { type: 'string' },
                                    'city': { type: 'string' },
                                    'country': { type: 'string' },
                                    'profile_picture': { type: 'string' },
                                }
                            }
                        }
                    ],
                    responses: []
                },

                delete: {
                    tags: ["Users"],
                    summary: 'Delete user',
                    produces: 'application/json',
                    parameters: [
                        {
                            name: 'id',
                            type: 'string',
                            in: 'path',
                            required: true
                        }
                    ],
                    responses: []
                }
            },


            /* Box Related Endpoints */
            '/boxes': { description: 'Box Related Endpoints' },

            '/boxes/{id}': {
                get: {
                    tags: ['Boxes'],
                    summary: "Get box by id",
                    consumes: ['application/json'],
                    description: "Search box database to get box by id",
                    produces: ["application/json"],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            required: true,
                            schema: { "type": "string" },
                            description: 'ID of the box'
                        },
                    ],
                    responses: {
                        '200': {
                            description: 'Box found with success',
                            schema: {
                                'type': 'object',
                                'properties': { ...default_response, 'data': 'object' }
                            }
                        },
                        "409": {
                            description: "No ID received",
                            schema: {
                                "type": "object",
                                'properties': default_response,

                            }
                        },
                        '404': {
                            description: 'No data found',
                            schema: default_response
                        }
                    }
                }
            },

            '/boxes/byUserId/{id}': {
                get: {
                    tags: ['Boxes'],
                    summary: 'Gets all boxes of an user',
                    consumes: ['application/json'],
                    description: 'Use the user id to return all boxes associated to its id',
                    parameters: [
                        {
                            name: 'id',
                            in: 'path',
                            required: 'true',
                            schema: { 'type': 'string' },
                            description: 'ID of the user'
                        }
                    ],
                    responses: {
                        '409': {
                            description: 'No ID received',
                            schema: default_response
                        },
                        '404': {
                            description: 'No User found',
                            schema: default_response
                        },
                        '200': {
                            description: 'Boxes found with success',
                            schema: { ...default_response, 'data': 'object' }
                        }
                    }
                }
            }
        },
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

export { options, specs }