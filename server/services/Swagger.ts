const swaggerJsdoc = require("swagger-jsdoc")

const options = {
    definition: {
        swagger: "2.0",
        info: {
            title: "Documentation for Finapp API",
            version: "0.1.0",
            description:
                "Follow our project at: https://github.com/HOPDigital/finance-app",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Hop Digital",
                url: "https://hopdigital.dev",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:9000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

export { options, specs }