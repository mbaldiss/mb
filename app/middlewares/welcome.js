const welcome = function(req, res){
    console.log('ENDPOINT: "/"');
    console.log('Welcome');
    res.send('ok');
}

module.exports = welcome;