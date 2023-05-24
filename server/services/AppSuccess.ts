import ISuccess from "../interfaces/AppInterfaces/Success"


export const Success: { [key: string]: ISuccess } = {

    USER_CREATED: {
        success: true,
        message: 'User successfuly created',
        status: 200
    },

    USER_FOUND: {
        success: true,
        message: 'User found',
        status: 200
    },

    TOKEN_CREATED: {
        success: true,
        message: 'Token created successfuly',
        status: 200
    },

    COMPANY_FOUND: {
        success: true,
        status: 200,
        message: 'Company Found'
    },
    COMPANY_CREATED: {
        success: true,
        status: 200,
        message: 'Company created successfuly'
    },
    COMPANY_UPDATED: {
        success: true,
        status: 200,
        message: 'Company updated with success'
    }
}