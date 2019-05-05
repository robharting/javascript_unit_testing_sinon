var request = require('request');

module.exports = {
    getTODOById: function (id) {
        const reqString =
            `https://jsonplaceholder.typicode.com/todos/${id}`;
        return new Promise((resolve, reject) => {
            request.get(reqString, (err, res, body) => {
                if(err) {
                    return reject(err);
                }
                resolve(JSON.parse(body));
            });
        });
    }
};