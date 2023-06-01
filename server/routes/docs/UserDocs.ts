import swaggerJSDoc, { PathItem } from "swagger-jsdoc";
import IResponse from "../../interfaces/ResponseInterface";

const default_response: IResponse = {
    success: { type: 'boolean', default: false },
    status: { type: 'number' },
    message: { type: 'string' }
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
                schema: { type: "string" },
                description: 'E-mail used to create the user'
            },

            {
                name: 'password',
                in: 'body',
                required: true,
                schema: { type: 'string' },
                description: 'Password created by that user'
            }
        ],
        responses: {
            400: {
                description: "Missing fields",
                schema: {
                    type: 'object',
                    properties: default_response
                }
            },
            409: {
                description: 'No user found',
                schema: {
                    type: 'object',
                    properties: default_response
                }
            },
            500: {
                description: 'Server internal error',
                schema: {
                    type: 'object',
                    properties: default_response
                }
            },
            200: {
                description: "Token created",
                schema: {
                    type: "object",
                    properties: {
                        ...default_response,
                        success: { type: 'boolean', default: true },
                        token: { type: 'string' }
                    }
                }
            },
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
                name: 'body',
                in: 'body',
                schema: {
                    type: 'object',
                    properties: {
                        name: {
                            required: true,
                            schema: { type: 'string' },
                            description: 'E-mail of the user',
                        },
                        password: {
                            required: true,
                            schema: { type: 'string' },
                            description: 'Password of the user',
                        },
                        first_name: {
                            required: true,
                            schema: { type: 'string' },
                            description: 'First name of the user',
                        },
                        last_name: {
                            required: true,
                            schema: { type: 'string' },
                            description: 'Last name of the user',
                        },
                        birth_date: {
                            required: true,
                            schema: { type: 'string' },
                            description: 'Birth date of the user, in format: yyyy-mm-dd',
                        },
                        city: {
                            required: false,
                            schema: { type: 'string' },
                            description: 'City of the user',
                        },
                        country: {
                            required: true,
                            schema: { type: 'string' },
                            description: 'Country of the user, to calculate currencies',
                        },
                        phone: {
                            required: false,
                            schema: { type: 'number' },
                            description: 'Phone number of the user',
                        },
                        profile_picture: {
                            required: false,
                            schema: { type: 'string' },
                            description: 'URI of the profile picture of the user',
                        }
                    }
                }
            }
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
                schema: { ...default_response, user: { type: 'object' }, success: true }
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
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'User found with success',
                schema: { type: 'object', properties: { ...default_response, data: { type: 'array' } } }
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
        responses: {
            409: {
                description: "No ID given to the api",
                schema: { type: 'object', properties: default_response }
            },
            400: {
                description: "Missing fields to be updated",
                schema: { type: 'object', properties: default_response },
            },
            404: {
                description: "No user found to be updated",
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error to update data',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'User updated with sucess',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true } } }
            }
        }
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
        responses: {
            409: {
                description: "No ID given to the api",
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error, could not delete data',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'User deleted with success',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true } } }
            }
        },
    }
}

