var express = require('express');
var app = express();
var ChessWebAPI = require('chess-web-api');

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