import * as swaggerJsDoc from 'swagger-jsdoc'
import IResponse from '../../interfaces/ResponseInterface'

const default_response: IResponse = {
    success: 'boolean',
    status: 'number',
    message: 'string'
}


export const get_box_by_id: swaggerJsDoc.PathItem = {
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
}

export const get_boxes_by_user_id: swaggerJsDoc.PathItem = {
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

export const create_box: swaggerJsDoc.PathItem = {
    post: {
        summary: 'Create box',
        description: 'Create new box with data',
        tags: ['Boxes'],
    }
}