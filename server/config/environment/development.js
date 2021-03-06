'use strict';

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://localhost:27017/api'
    },

    mqtt: {
        host: process.env.EMQTT_HOST || 'localhost',
        clientId: 'API_Server_Dev',
        port: 8883
    }
};
