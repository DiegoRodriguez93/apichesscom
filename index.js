var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var ChessWebAPI = require('chess-web-api');

app.use(function(req,res, next) {
    res.header("Access-Control-Allow-Origin","*"); 
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"); 
    next();
    
    });
    
    // for parsing application/json
    app.use(bodyParser.json());
    // for parsing application/xwww-
    app.use(bodyParser.urlencoded({extended:true })); 
    

var chessAPI = new ChessWebAPI();


/* chessAPI.getPlayer('andyruwruw')
    .then(function(res) {
        console.log(res.body);
    }, function(err) {
        console.error(err.statusCode);
    });
 */

app.post('/chesscomplayer', function (req, res) {

    chessAPI.getPlayer(req.body.username)
    .then(function(res) {
       res.send(res.body);
    }, function(err) {
        res.send(err.statusCode);
    });

});

app.listen(3000, function () {
  console.log('APP listening on port 3000!');
});