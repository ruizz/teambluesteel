
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home.html', { title: 'BlueSteel' });
};
