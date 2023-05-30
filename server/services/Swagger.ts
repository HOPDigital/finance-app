const swaggerJsdoc = require("swagger-jsdoc")

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

const options = {
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
            '/user': {
                get: {
                    'tags': ['User'],
                    'description': 'User - related operations'
                }
            },
            '/user/login': {
                post: {
                    'tags': ['User'],
                    "summary": "Authenticate user",
                    "description": "Authenticate user and returns user token if correct",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "email",
                            "in": "body",
                            "required": true,
                            "schema": { "type": "string" },
                            'description': 'E-mail used to create the user'
                        },

                        {
                            'name': 'password',
                            'in': 'body',
                            'required': true,
                            'schema': { 'type': 'string' },
                            'description': 'Password created by that user'
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Token created",
                            "schema": {
                                "type": "object",
                                'properties': {
                                    ...default_response,
                                    'token': 'string'
                                }
                            }
                        },
                        "400": {
                            "description": "Missing fields",
                            "schema": {
                                'type': 'object',
                                'properties': default_response
                            }
                        },
                        '409': {
                            'description': 'No user found',
                            'schema': {
                                'type': 'object',
                                'properties': default_response
                            }
                        },
                        '500': {
                            'description': 'Server internal error',
                            'schema': {
                                'type': 'object',
                                'properties': default_response
                            }
                        }
                    }
                }
            },


            /* Box Related Endpoints */
            '/boxes': { description: 'Box Related Endpoints' },

            '/boxes/:id': {
                get: {
                    'tags': ['Boxes'],
                    "summary": "Get box by id",
                    "description": "Search box database to get box by id",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "required": true,
                            "schema": { "type": "string" },
                            'description': 'ID of the box'
                        },
                    ],
                    'responses': {
                        '200': {
                            'description': 'Box found with success',
                            'schema': {
                                'type': 'object',
                                'properties': { ...default_response, 'data': 'object' }
                            }
                        },
                        "409": {
                            "description": "No ID received",
                            "schema": {
                                "type": "object",
                                'properties': default_response,

                            }
                        },
                        '404': {
                            'description': 'No data found',
                            'schema': default_response
                        }
                    }
                }
            },
            '/boxes/byUserId/:id': {
                get: {
                    'tags': ['Boxes'],
                    'summary': 'Gets all boxes of an user',
                    'description': 'Use the user id to return all boxes associated to its id',
                    'parameters': [
                        {
                            'name': 'id',
                            'in': 'path',
                            'required': 'true',
                            'schema': { 'type': 'string' },
                            'description': 'ID of the user'
                        }
                    ],
                    'responses': {
                        '409': {
                            'description': 'No ID received',
                            'schema': default_response
                        },
                        '404': {
                            'description': 'No User found',
                            'schema': default_response
                        },
                        '200': {
                            'description': 'Boxes found with success',
                            'schema': { ...default_response, 'data': 'object' }
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