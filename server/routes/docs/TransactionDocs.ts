import { PathItem } from "swagger-jsdoc";
import IResponse from "../../interfaces/ResponseInterface";

const default_response: IResponse = {
    success: { type: 'boolean', default: false },
    status: { type: 'number' },
    message: { type: 'string' }
}


export const get_transactions_by_box_id: PathItem = {
    get: {
        tags: ['Transactions'],
        summary: "Get box by id",
        consumes: ['application/json'],
        description: "Search box database to get box by id",
        produces: ["application/json"],
        parameters: [
            {
                name: "box_id",
                in: "path",
                required: true,
                schema: { "type": "string" },
                description: 'ID of the box'
            },
        ],
        responses: {
            200: {
                description: 'Transactions Found With Success',
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

export const get_transactions_by_user_id: PathItem = {
    get: {
        tags: ['Transactions'],
        summary: "Get transactions of an user",
        consumes: ['application/json'],
        description: "Search box database to get box by id",
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
                description: 'Transactions Found With Success',
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

export const create_transaction: PathItem = {
    post: {
        summary: 'Create transaction',
        description: 'Create new box with data',
        tags: ['Boxes'],
        consumes: ['application/json'],
        parameters: [
            {
                name: 'box_id',
                in: 'body',
                description: 'Identification of the box that the transaction will be added',
                schema: { type: 'string' }
            },

            {
                name: "fields",
                in: 'body',
                description: 'Fields used to create box',
                schema: {
                    type: 'object',
                    properties: {
                        value: { required: true, description: 'Value used in that transaction', schema: { type: 'number' } },
                        description: { type: 'string' },
                        currency: { type: 'string' },
                        type: { type: 'string', description: 'Type of transaction, it can be income or invoice' },
                        date: { type: 'date', description: 'Date of transaction' },
                        created_at: { type: 'date', description: 'Automatic date of transaction, set by server' },
                        category: { type: 'string', description: 'ID category to be associated' }
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
                description: 'No user found to add transaction',
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error when creating new transaction',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Transaction created with success ',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'object' } } }
            }
        }
    }
}

export const update_transaction: PathItem = {
    patch: {
        summary: 'Update transaction',
        description: 'Update new box with data',
        tags: ['Boxes'],
        consumes: ['application/json'],
        parameters: [
            {
                name: 'box_id',
                in: 'body',
                description: 'Identification of the box that the transaction will be added',
                schema: { type: 'string' }
            },

            {
                name: "fields",
                in: 'body',
                description: 'Fields used to Update box',
                schema: {
                    type: 'object',
                    properties: {
                        value: { schema: { type: 'number' }, description: 'Value used in that transaction' },
                        description: { type: 'string' },
                        currency: { type: 'string' },
                        type: { type: 'string', description: 'Type of transaction, it can be income or invoice' },
                        date: { type: 'date', description: 'Date of transaction' },
                        category: { type: 'string', description: 'ID category to be associated' }
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
                description: 'No user found to add transaction',
                schema: { type: 'object', properties: default_response }
            },
            500: {
                description: 'Internal error when creating new transaction',
                schema: { type: 'object', properties: default_response }
            },
            200: {
                description: 'Transaction created with success ',
                schema: { type: 'object', properties: { ...default_response, success: { type: 'boolean', default: true }, data: { type: 'object' } } }
            }
        }
    }
}

export const delete_transaction: PathItem = {
    get: {
        tags: ['Transactions'],
        summary: "Delete transaction by id",
        consumes: ['application/json'],
        produces: ["application/json"],
        parameters: [
            {
                name: "transaction_id",
                in: "path",
                required: true,
                schema: { "type": "string" },
                description: 'ID of the transaction'
            },
        ],
        responses: {
            200: {
                description: 'Transactions deleted With Success',
                schema: {
                    type: 'object',
                    properties: { ...default_response, success: { type: 'boolean', default: true } }
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