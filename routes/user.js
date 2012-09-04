
/*
 * GET home page.
 */
var url = require('../utils/urlUtil'),
resUtil = require('../utils/responseUtil');

module.exports = {

    index: function(req, res) {
        console.log('Get users.');
        res.send('Get users.', 200);
    },

    new: function(req, res) {
        res.send(405);
    },

    create: function(req, res) {
        console.log('Post user.');

        var location = url.create({
            protcol: 'http',
            host: req.header('host'),
            path: req.path
        }, '11111111');

        res.setHeader('location', location);
        res.send('Post user.', 201);
    },

    show: function(req, res) {
        var id = req.params.user;
        console.log('id:' + id);

        console.log('Get user.');
        res.send('Get user.', 200);
    },

    edit: function(req, res) {
        res.send(405);
    },

    update: function(req, res) {
        var id = req.params.user;
        console.log('id:' + id);

        console.log('Put user.');
        res.send('Put user.', 200);
    },

    destroy: function(req, res) {
        var id = req.params.user;
        console.log('id:' + id);

        console.log('Delete user.');
        res.send('Delete user.', 200);
    },
};
