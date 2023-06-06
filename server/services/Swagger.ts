const swaggerJsdoc = require("swagger-jsdoc")
import * as swaggerJsDoc from 'swagger-jsdoc'
import { create_box, delete_box, get_box_by_id, get_boxes_by_user_id, update_box } from '../routes/docs/BoxDocs';
import { register_user, user_login, users_with_id } from '../routes/docs/UserDocs';
import { create_card, delete_card, get_card_by_box_id, get_card_by_id, update_card } from '../routes/docs/CardDocs';

interface IResponse {
    success: boolean | string,
    status: number | string,
    message: string
}

const default_response: IResponse = {
    success: 'boolean',
    status: 'number',
    message: 'string'
}

const options: swaggerJsDoc.Options = {
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
            { url: "http://localhost:9000", },
        ],

        paths: {

            /* User Related Endpoints */
            '/user/login': user_login,
            '/users/register': register_user,
            '/users/{id}': users_with_id,


            /* Box Related Endpoints */

            '/boxes/{id}': get_box_by_id,
            '/boxes/byUserId/{id}': get_boxes_by_user_id,
            '/boxes/create': create_box,
            '/boxes/update': update_box,
            '/boxes/delete': delete_box,


            /* Card Related Endpoints */

            '/cards/getByBoxId/{box_id}': get_card_by_box_id,
            '/cards/getCardByid/{card_id}': get_card_by_id,
            '/cards/delete/{card_id}': delete_card,
            '/cards/create': create_card,
            '/cards/update': update_card,

            
        },
    },
    apis: ["./routes/*.js"],
};



const specs = swaggerJsdoc(options);

export { options, specs }