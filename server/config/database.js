const mongoose = require('mongoose')

const { MONGO_URI } = process.env;

exports.connect = () => {
    /* console.log('CONNECTING TO DATABASE') */
    mongoose
        .connect(MONGO_URI)

        .then(() => {
            /* console.log('CONNECTED TO DATABASE') */
        })

        .catch(err => {
           /*  console.log("ERROR CONNECTING TO DATABASE\n\n")
            console.log(err) */
            process.exit(1)
        })
}