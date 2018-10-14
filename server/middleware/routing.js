var path = require("path");
var index = path.resolve('client/www/index.html')
module.exports = function() {
    return function(req, res, next) {
        res.sendFile(index, function(err) {
            if(err) {
                res.status(err.status).end();
            }
        })
    }
}