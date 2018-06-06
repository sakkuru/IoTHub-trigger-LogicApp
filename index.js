const https = require('https');
const url = require('url');

const logicURL = '';

module.exports = (context, IoTHubMessages) => {
    const post = JSON.stringify({ Message: IoTHubMessages });

    const options = {
        hostname: url.parse(logicURL).hostname,
        path: url.parse(logicURL).path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const req = https.request(options);
    req.write(post);
    req.end();

    context.done();
};