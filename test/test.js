var assert = require("assert");
var register = require("../");

register();
register( "csv" );
register( [ "html", "html5" ] );

var txt = require( "./test.txt" );
var csv = require( "./test.csv" );
var html = require( "./test.html" );
var html5 = require( "./test.html5" );

assert.equal( txt, "this is a test." );
assert.equal( csv, "id,name\n1,Product 1\n2,My Product" );
assert.equal( html, "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n  </body>\n</html>" );
assert.equal( html5, "<!DOCTYPE html>\n<html>\n  <head>\n  </head>\n  <body>\n  </body>\n</html>" );