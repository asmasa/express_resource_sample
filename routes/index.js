
/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log('index', req.session.user);
    res.render('index', { title: 'Express' })
};
