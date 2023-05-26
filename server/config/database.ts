const mongoose = require('mongoose')

import { logger } from '../services/Logger';

export default function connectToDataBase(MONGO_URI: string | undefined): any {

    logger.info('connecting to database')

    mongoose

        .connect(MONGO_URI)

        .then(() => {
            logger.info('connected to database')
            logger.info(MONGO_URI)
        })

        .catch((err: Error) => {
            logger.error('error connecting to database ')
            logger.error(err.message)
            process.exit(1)
        })
}