exports.name = '/images/mp3';
exports.index = async(req, res, next) => {
    try {
        const girl = require('./data/json/mp3.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            url: image,
            count: girl.length,
            author: 'Gkhanh'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}