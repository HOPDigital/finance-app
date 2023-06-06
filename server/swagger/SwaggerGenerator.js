const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'

const endpointFiles = [
    'routes/BoxRoute.ts',
    'routes/CardRoute.ts',
    'routes/CompanyRoute.ts',
    'routes/TransactionRoute.ts',
    'routes/UserRoute.ts',
]

swaggerAutogen(outputFile, endpointFiles)