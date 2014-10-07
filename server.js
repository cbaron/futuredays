var server = require('../lib/node-router').getServer();

server.get( "/", function( request, response ) {

    var myPg = require('lib/myPg').object

    myPg.connect(

    /*
    var pg = require('pg'),
        conString = "postgres://cbaron:cbaron@localhost/futuredays",
        query = [ "SELECT table_name ",
                  "FROM information_schema.tables ",
                  "WHERE table_schema='public' ",
                    "AND table_type='BASE TABLE';" ].join("");

    pg.connect(conString, function(err, client, done) {

      if(err) {
        return console.error('error fetching client from pool', err);
      }

      client.query( query, [ ], function( err, result ) {
        //call `done()` to release the client back to the pool
        done();

        if(err) {
          return console.error('error running query', err);
        }

        console.log(result);

      } );

    } );
    */

} );

server.get( "/transactions", function( request, response ) {
    return { sup: "son" }
} );

server.listen(8000, "localhost");
