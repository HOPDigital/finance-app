const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

process.env.SERVER_PORT = 9000

module.exports = async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports.stop = async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
};
