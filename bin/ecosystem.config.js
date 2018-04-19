module.exports = {
    apps: [
        {
            name: 'mosca',
            script: 'bin/mqtt',
            interpreter:"sh"
        },
        {
            name: 'express',
            script: 'bin/www'
        }]
};