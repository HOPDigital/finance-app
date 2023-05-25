import IError from "../interfaces/AppInterfaces/Error"
export const Errors: { [key: string]: IError } = {

    INTERNAL_ERROR: {
        success: false,
        message: 'Error: Server error',
        status: 500
    },

    REQUEST_ERROR: {
        success: false,
        message: 'Error: Request error',
        status: 400
    },

    NO_TOKEN_ERROR: {
        auth: false,
        message: 'No Token Provided',
        status: 401,
        success: false
    },
    FAILED_TO_AUTHENTICATE_TOKEN: {
        auth: false,
        success: false,
        status: 500,
        message: 'Failed to authenticate token'
    },

    USER_ALREADY_EXISTS: {
        auth: false,
        message: 'User already exists',
        status: 409,
        success: false
    },

    PERMISSION_ERROR: {
        success: false,
        message: 'Error, you do not have permission to do this action',
        status: 500
    },

    TOKEN_AUTHENTICATE_ERROR: {
        success: false,
        message: 'Failed to authenticate token',
        status: 500
    },

    MISSING_FIELDS: {
        success: false,
        status: 400,
        message: 'Missing required fields'
    },

    NO_USER_FOUND: {
        success: false,
        status: 401,
        message: 'No user found'
    },

    NO_DATA_FOUND: {
        success: false,
        status: 409,
        message: "No data found to be changed"
    },

    COMPANY_NOT_CREATED: {
        success: false,
        status: 500,
        message: 'Error creating company'
    },
    COMPANY_NOT_UPDATED: {
        success: false,
        status: 500,
        message: 'Error updating company'
    },
    ERROR_RETRIEVING_DATA: {
        success: false,
        status: 500,
        message: 'No data found or error retrieving data'
    },
    ERROR_CREATING_DATA: {
        success: false,
        status: 500,
        message: 'Error creating data'
    },
    NO_ID_RECEIVED: {
        success: false,
        status: 409,
        message: 'No ID recieved'
    },
    ERROR_UPDATING_DATA: {
        success: false,
        status: 500,
        message: 'Error updating data'
    },
    ERROR_DELETING_DATA: {
        success: false,
        status: 500,
        message: 'Error deleting data'
    }
}


