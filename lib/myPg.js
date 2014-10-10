var dal = function() {
    var pg = require('../../node_modules/pg');
    var events = require('events');

    this._pg = pg;
    this.client = undefined;
    this.result = undefined;
    this.eventEmitter = new events.EventEmitter();
}

dal.prototype.connect = function() {
    this._pg.connect( require('../private/postgresConfig').connectionString, this._handleConnect.bind(this) );
    return this;
},

dal.prototype._handleConnect = function( err, client, done ) {
    if( err ) {
      return console.error('error fetching client from pool', err);
    }

    this.client = client;
    this.done = done;

    this.eventEmitter.emit( 'dbConnected' );
},

dal.prototype.query = function( query, params ) {
    this.client.query( query, params, this._handleQuery.bind(this) );
    return this;
},

dal.prototype._handleQuery = function( err, result ) {
    this.done();

    if(err) {
      return console.error('error running query', err);
    }

    this.result = result;

    this.eventEmitter.emit( 'dbSuccessfulQuery' );

    return this;
}

exports.dal = new dal();
