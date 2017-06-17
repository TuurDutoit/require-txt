var fs = require("fs");

module.exports = function register( type ) {
  
  if ( Array.isArray( type ) ) {
    type.forEach( registerTextHandler );
  }
  else if ( typeof type === "string" ) {
    registerTextHandler( type );
  }
  else {
    registerTextHandler( "txt" );
  }
  
}

function registerTextHandler( type ) {
  require.extensions[ "." + type ] = function( module, filename ) {
    module.exports = fs.readFileSync( filename, { encoding: "utf8" } );
  }
}