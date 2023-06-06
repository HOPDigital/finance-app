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
                description: 'Cards gathered with success',
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

export const get_card_by_id: PathItem = {
    get: {
        tags: ['Cards'],
        summary: 'Get card by id',
        description: "Get the card related to its id",
        consumes: ['application/json'],
        parameters: [
            { name: 'card_id', in: 'path', required: true, schema: { type: 'string' } }
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
                description: 'Got card with success',
                schema: {
                    type: 'object',
                    properties: {
                        ...default_response,
                        success: { type: 'boolean', default: true },
                        data: { type: 'object' }
                    }
                }
            }
        }
    }
}

export const delete_card: PathItem = {

    delete: {
        tags: ['Cards'],
        summary: 'Get card by id',
        description: "Get the card related to its id",
        consumes: ['application/json'],
        parameters: [
            { name: 'card_id', in: 'path', required: true, schema: { type: 'string' } }
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
                description: 'Deleted with success',
                schema: {
                    type: 'object',
                    properties: {
                        ...default_response,
                        success: { type: 'boolean', default: true },
                    }
                }
            }
        }
    }
}

export const create_card: PathItem = {
    post: {
        tags: ['Cards'],
        summary: 'Get card by id',
        description: "Get the card related to its id",
        consumes: ['application/json'],
        parameters: [
            {
                name: 'filds', in: 'body', required: true,
                schema: {
                    type: 'object', properties: {
                        name: { schema: { type: 'string' }, required: true },
                        flag: { schema: { type: 'string' }, required: true },
                        number: { schema: { type: 'number' }, required: true },
                    }
                }
            }
        ],
        responses: {
            400: {
                description: 'Missing required fields',
                schema: { type: 'object', properties: default_response }
            },
            409: {
                description: 'No ID received',
                schema: { type: 'object', properties: default_response }
            },
            404: {
                description: 'No data found to be updated',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Card created with success',
                schema: {
                    type: 'object',
                    properties: {
                        ...default_response,
                        success: { type: 'boolean', default: true },
                        data: { type: 'object' }
                    }
                }
            }
        }
    }
}

export const update_card: PathItem = {
    patch: {
        tags: ['Cards'],
        summary: 'Get card by id',
        description: "Get the card related to its id",
        consumes: ['application/json'],
        parameters: [
            {
                name: 'filds', in: 'body', required: true,
                schema: {
                    type: 'object', properties: {
                        name: { schema: { type: 'string' }, required: true },
                        flag: { schema: { type: 'string' }, required: true },
                        number: { schema: { type: 'number' }, required: true },
                    }
                }
            }
        ],
        responses: {
            400: {
                description: 'Missing required fields',
                schema: { type: 'object', properties: default_response }
            },
            409: {
                description: 'No ID received',
                schema: { type: 'object', properties: default_response }
            },
            404: {
                description: 'No data found to be updated',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Card created with success',
                schema: {
                    type: 'object',
                    properties: {
                        ...default_response,
                        success: { type: 'boolean', default: true },
                        data: { type: 'object' }
                    }
                }
            }
        }
    }
}