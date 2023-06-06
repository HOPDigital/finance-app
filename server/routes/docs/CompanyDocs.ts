import { PathItem } from "swagger-jsdoc";
import IResponse from "../../interfaces/ResponseInterface";


const default_response: IResponse = {
    success: { type: 'boolean', default: false },
    status: { type: 'number' },
    message: { type: 'string' }
}


export const get_all_companies: PathItem = {
    get: {
        tags: ['Companies'],
        summary: "Get all companies",
        consumes: ['application/json'],
        description: "Get all companies",
        produces: ["application/json"],
        responses: {
            200: {
                description: 'Companies found with success',
                schema: {
                    type: 'object',
                    properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'array' } }
                }
            },
            409: {
                description: "No ID received",
                schema: {
                    type: "object",
                    properties: default_response,

                }
            },
            404: {
                description: 'No data found',
                schema: {
                    type: 'object',
                    properties: default_response
                }
            }
        }
    }
}

export const get_companies_by_user_id: PathItem = {
    get: {
        tags: ['Companies'],
        summary: "Get all companies",
        consumes: ['application/json'],
        description: "Get all companies",
        produces: ["application/json"],
        parameters: [
            {
                name: "user_id",
                in: "path",
                required: true,
                schema: { "type": "string" },
                description: 'ID of the user'
            },
        ],
        responses: {
            200: {
                description: 'Companies found with success',
                schema: {
                    type: 'object',
                    properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'array' } }
                }
            },
            409: {
                description: "No ID received",
                schema: {
                    type: "object",
                    properties: default_response,

                }
            },
            404: {
                description: 'No data found',
                schema: {
                    type: 'object',
                    properties: default_response
                }
            }
        }
    }
}

export const create_company: PathItem = {

    post: {
        summary: 'Create company',
        description: 'Create new company with data',
        tags: ['Companies'],
        consumes: ['application/json'],
        parameters: [
            {
                name: 'user_id',
                in: 'body',
                description: 'ID of the user, the company will be created'
            },
            {
                name: "fields",
                in: 'body',
                description: 'Fields used to create box',
                schema: {
                    type: 'object',
                    properties: {
                        name: { required: true, description: 'Name of the company', schema: { type: 'string' } },
                        description: { description: 'Description of the company', schema: { type: 'string' } },
                        logotype: { description: 'URI of the logotype of the company', schema: { type: 'string' } },
                        hero: { description: 'URI of the hero background of the company', schema: { type: 'string' } },
                        shared_data: {
                            description: 'Parameters to turn company into shared',
                            schema: {
                                type: 'object', properties: {
                                    is_shared: { type: 'boolean', description: 'Define if the company is shared or not' },
                                    users: { type: 'array', description: 'Users that owns that company' }
                                }
                            },
                        }
                    }
                }
            }
        ],
        responses: {
            409: {
                description: 'No user ID received',
                schema: { type: 'object', properties: default_response }
            },
            400: {
                description: 'Missing required fields',
                schema: { type: 'object', properties: default_response }
            },
            404: {
                description: 'No user found to add box',
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error when creating new box',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Company created with success ',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'object' } } }
            }
        }
    }
}


export const update_company: PathItem = {
    patch: {
        summary: 'Update company',
        description: 'Update new company with data',
        tags: ['Companies'],
        consumes: ['application/json'],
        parameters: [
            {
                name: 'user_id',
                in: 'body',
                description: 'ID of the user, the company will be Updated'
            },
            {
                name: 'company_id',
                in: 'body',
                description: 'ID of the company, the company will be Updated'
            },
            {
                name: "fields",
                in: 'body',
                description: 'Fields used to Update box',
                schema: {
                    type: 'object',
                    properties: {
                        name: { description: 'Name of the company', schema: { type: 'string' } },
                        description: { description: 'Description of the company', schema: { type: 'string' } },
                        logotype: { description: 'URI of the logotype of the company', schema: { type: 'string' } },
                        hero: { description: 'URI of the hero background of the company', schema: { type: 'string' } },
                        shared_data: {
                            description: 'Parameters to turn company into shared',
                            schema: {
                                type: 'object', properties: {
                                    is_shared: { type: 'boolean', description: 'Define if the company is shared or not' },
                                    users: { type: 'array', description: 'Users that owns that company' }
                                }
                            },
                        }
                    }
                }
            }
        ],
        responses: {
            409: {
                description: 'No user ID received',
                schema: { type: 'object', properties: default_response }
            },
            400: {
                description: 'Missing required fields',
                schema: { type: 'object', properties: default_response }
            },
            404: {
                description: 'No user found to add box',
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error when creating new box',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Company updated with success ',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'object' } } }
            }
        }
    }
}