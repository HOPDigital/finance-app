const Errors = {

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
        status: 401
    },

    USER_ALREADY_EXISTS: {
        auth: false,
        message: 'User already exists',
        status: 409
    },

    PERMISSION_ERROR: {
        success: false,
        message: 'Error, you do not have permission to do this action',
        status: 500
    },

    TOKEN_AUTHENTICATE_ERROR: {
        auth: false,
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
        
    }
}

module.exports = Errors