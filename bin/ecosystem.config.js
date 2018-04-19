module.exports = {
    apps: [
        {
            name: 'mosca',
            script: 'mosca -c broker/index.js -v | pino'
        },
        {
            name: 'express',
            script: 'bin/www'
        }]
};