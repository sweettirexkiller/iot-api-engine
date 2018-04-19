let SSL_KEY = __dirname + '/key.pem';
let SSL_CERT = __dirname + '/certificate.pem';
let MONGOURL = 'mongodb://localhost:27017/iot';

module.exports = {
    id: 'broker',
    stats: false,
    port: 8443,
    logger: {
        name: 'iot',
        level: 'debug'
    },
    secure: {
        keyPath: SSL_KEY,
        certPath: SSL_CERT
    },
    backend: {
        type: 'mongodb',
        url: MONGOURL
    },
    persistence: {
        factory: 'mongo',
        url: MONGOURL
    }
};
