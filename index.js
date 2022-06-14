class Formatter {
  //add static methods here
  static capitalize(string ){
  return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(str){
  return str.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  static titleize( title ) {
    let letters = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let words = title.split( " " )
    for ( let i = 0; i < words.length; i++ ) {
      if ( i == 0 ) {
        result.push( this.capitalize( words[ i ] ) )
      } else {
        if ( letters.includes( words[ i ] ) ) {
          result.push( words[ i ] )
        } else {
          result.push( this.capitalize( words[ i ] ) )
        }
      }

    }
    return result.join( " " );
  }
}

 Formatter.titleize("hello from word")

