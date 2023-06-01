import { PathItem } from "swagger-jsdoc";
import IResponse from '../../interfaces/ResponseInterface'

const default_response: IResponse = {
    success: { type: 'boolean', default: false },
    status: { type: 'number' },
    message: { type: 'string' }
}


export const get_card_by_box_id: PathItem = {
    get: {
        tags: ['Cards'],
        summary: 'Get cards by box id',
        description: "Get all cards related to the box id",
        consumes: ['application/json'],
        parameters: [
            { name: 'box_id', in: 'path', required: true, schema: { type: 'string' } }
        ],
        responses: {
            409: {
                description: 'No ID received',
                schema: { type: 'object', properties: default_response }
            },
            404: {
                description: 'No data found to be updated',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Boxes gathered with success',
                schema: {
                    type: 'object',
                    properties: {
                        ...default_response,
                        success: { type: 'boolean', default: true },
                        data: { type: 'array' }
                    }
                }
            }
        }
    }
}

export const get_card_by_id: PathItem = {}

export const delete_card: PathItem = {}

export const create_card: PathItem = {}

export const update_card: PathItem = {}