let SSL_KEY = '/etc/letsencrypt/keys/0000_key-certbot.pem';
let SSL_CERT = '/etc/letsencrypt/ssl-dhparams.pem';
let MONGOURL = 'mongodb://iot';

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
