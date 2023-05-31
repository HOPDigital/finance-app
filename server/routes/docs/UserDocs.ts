import swaggerJSDoc, { PathItem } from "swagger-jsdoc";
import IResponse from "../../interfaces/ResponseInterface";

const default_response: IResponse = {
    success: 'boolean',
    status: 'number',
    message: 'string'
}

export const user_login: PathItem = {
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
}

export const register_user: PathItem = {
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
}


export const users_with_id: PathItem = {
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
}
