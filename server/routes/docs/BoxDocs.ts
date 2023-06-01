import { PathItem } from 'swagger-jsdoc'
import IResponse from '../../interfaces/ResponseInterface'

const default_response: IResponse = {
    success: { type: 'boolean', default: false },
    status: { type: 'number' },
    message: { type: 'string' }
}


export const get_box_by_id: PathItem = {
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
            200: {
                description: 'Box found with success',
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

export const get_boxes_by_user_id: PathItem = {
    get: {
        tags: ['Boxes'],
        summary: 'Gets all boxes of an user',
        consumes: ['application/json'],
        description: 'Use the user id to return all boxes associated to its id',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                schema: { 'type': 'string' },
                description: 'ID of the user'
            }
        ],
        responses: {
            409: {
                description: 'No ID received',
                schema: {
                    type: 'object',
                    properties: { default_response }
                }
            },
            404: {
                description: 'No User found',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Boxes found with success',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, 'data': { type: 'array' } } }
            }
        }
    }
}

export const create_box: PathItem = {
    post: {
        summary: 'Create box',
        description: 'Create new box with data',
        tags: ['Boxes'],
        consumes: ['application/json'],
        parameters: [
            {
                name: 'user_id',
                in: 'body',
                description: 'Identification of the user that the box will be added',
                schema: { type: 'string' }
            },

            {
                name: "fields",
                in: 'body',
                description: 'Fields used to create box',
                schema: {
                    type: 'object',
                    properties: {
                        name: { required: true, description: 'Name of the box', schema: { type: 'string' } },
                        description: { type: 'string' },
                        target: { required: true, type: 'number', description: 'Monetary target of the user' },
                        balance: { type: 'number' },
                        currency: { type: 'string', description: 'Currency of the money to be inserted' },
                        background_image: { type: 'string', description: 'URI to background image of box header' },
                        box_image: { type: 'string', description: '"Profile picture" of the box, like a logotype or icon' }
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
                description: 'Box created with success ',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'object' } } }
            }
        }
    }
}

export const update_box: PathItem = {

    patch: {
        summary: 'Update box',
        description: 'Update box using user_id and box_id',
        tags: ['Boxes'],
        consumes: ['application/json'],
        parameters: [
            {
                name: 'user_id',
                in: 'body',
                description: 'Identification of the user that the box will be updated',
                schema: { type: 'string' }
            },
            {
                name: 'box_id',
                in: 'body',
                description: 'Identification of the user that the box will be updated',
                schema: { type: 'string' }
            },

            {
                name: "fields",
                in: 'body',
                description: 'Fields used to create box',
                schema: {
                    type: 'object',
                    properties: {
                        name: { description: 'Name of the box', schema: { type: 'string' } },
                        description: { type: 'string' },
                        target: { type: 'number', description: 'Monetary target of the user' },
                        balance: { type: 'number' },
                        currency: { type: 'string', description: 'Currency of the money to be inserted' },
                        background_image: { type: 'string', description: 'URI to background image of box header' },
                        box_image: { type: 'string', description: '"Profile picture" of the box, like a logotype or icon' }
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
                description: 'No user / box found found',
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error when updating new box',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Box updated with success ',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'object' } } }
            }
        }
    }
}

export const delete_box: PathItem = {
    delete: {
        summary: 'Delete box',
        description: 'Delete box using user_id and box_id',
        tags: ['Boxes'],
        consumes: ['application/json'],
        parameters: [
            {
                name: 'user_id',
                in: 'body',
                description: 'Identification of the user',
                schema: { type: 'string' }
            },
            {
                name: 'box_id',
                in: 'body',
                description: 'Identification of the box',
                schema: { type: 'string' }
            },
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
                description: 'No user / box found',
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error when deleting box',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Box deleted with success ',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'object' } } }
            }
        }
    }
}