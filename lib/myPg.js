var pg = require('pg');

var object = function() {
    this.client: undefined;
    this.result: undefined;
}

object.prototype.connect: function() {
    pg.connect( "postgres://cbaron:cbaron@localhost/futuredays", this._handleConnect );
    return this;
},

object.prototype._handleConnect: function( err, client, done ) {
    if( err ) {
      return console.error('error fetching client from pool', err);
    }

    this.client = client;
    return this;
},

object.prototype.query: function( query, params ) {
    this.client.query( query, params, this._handleQuery );
    return this;
},

object.prototype._handleQuery: function( err, result ) {
    done();

    if(err) {
      return console.error('error running query', err);
    }

    this.result = result;
    return this;
}

exports.object = new object();
