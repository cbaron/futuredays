var http = require('http');

var handler = function( request, response ) {

    var url = require('url'),
        _ = require('../node_modules/underscore'),
        collectionJson = require('./lib/collectionJson').collectionJson,
        urlData = url.parse( request.url ),
        responseHeaders = {
            'Content-Type': 'application/json',
            'Content-Length': undefined,
            'Cache-Control': "no-cache, no-store, must-revalidate",
            'Connection': "Close",
            'Date': new Date().toISOString()
        };

    console.log( request.headers.accept );

    if( request.headers.accept.indexOf('application/xhtml+xml') != -1 ) {

    } else if( urlData.pathname === '/' ) {

        var myPg = require('./lib/myPg').dal;
            query = [ "SELECT table_name ",
                      "FROM information_schema.tables ",
                      "WHERE table_schema='public' ",
                        "AND table_type='BASE TABLE';" ].join("")

        myPg.connect()
            .eventEmitter.on( 'dbConnected', function() {
                myPg.query( query, [ ] )
                    .eventEmitter.on( 'dbSuccessfulQuery', function() {

                        var cJ = new collectionJson();

                        cJ.setItems( _.map( myPg.result.rows, function( row ) {
                            return {
                                href: url.href + row.table_name,
                                data: [ { value: row.table_name + 's' } ]
                            }
                        } ) );
                        

                        var responseBody = JSON.stringify( myPg.result );
                        responseHeaders['Content-Length'] = Buffer.byteLength( responseBody );
                        response.writeHead( 200, responseHeaders);
                        response.end( responseBody );               
                    } );
            } );
    }
}

http.createServer(handler).listen(8000);
