const AppErrors = {

    internalError: {
        success: false,
        message: 'Error: Server error',
        status: 500
    },

    requestError: {
        success: false,
        message: 'Error: Request error',
        status: 400
    },

    permissionError: {
        success: false,
        message: 'Error, you do not have permission to do this action',
        status: 500
    }
}

module.exports = AppErrors